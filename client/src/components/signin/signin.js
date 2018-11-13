import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";
import "./signin.css";

const SignInPage = ({ history }) => (
  <div id="signIn" class="container">
    <SignInForm history={history} />
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, passwordOne } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    const { email, passwordOne, error } = this.state;

    return (
      <div id="loginPage" className="container">
        <form id="login" onSubmit={this.onSubmit}>
          <div id="loginForm" className="form-group">
            <h1 id="loginHead">Login Page</h1>
            <br />
            <input
              id="email"
              className="form-control email"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
              type="email"
              placeholder="Email Address"
            />
            <br />
            <input
              id="password"
              value={passwordOne}
              className="form-control password"
              onChange={event =>
                this.setState(byPropKey("passwordOne", event.target.value))
              }
              type="password"
              placeholder="Password"
            />
            <br />
            <div id="buttons">
              <button type="submit" className="btn btn-primary login">
                Login
              </button>{" "}
            </div>
            {error && <p>{error.message}</p>}
          </div>
        </form>
        {SignUpLink()}
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignInPage);

export { SignInForm };
