import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import './signup.css';

const SignUpPage = ({ history }) => (
  <div id="signUp" className="container">
    <SignUpForm history={history} />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    console.log('submit button pressed');
    const { email, passwordOne, passwordTwo } = this.state;

    const { history } = this.props;
    if (passwordOne !== passwordTwo) {
      const error = {
        message: 'passwords do not match'
      };
      this.setState(byPropKey('error', error));
    } else {
      auth
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
    }
    event.preventDefault();
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    return (
      <div id="loginPage" className="container">
        <form id="logins" onSubmit={this.onSubmit}>
          <div id="loginForm" className="form-group">
            <h1 id="loginHead">Sign Up Page</h1>
            <br />
            <input
              id="email"
              className="form-control email"
              value={email}
              onChange={event =>
                this.setState(byPropKey('email', event.target.value))
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
                this.setState(byPropKey('passwordOne', event.target.value))
              }
              type="password"
              placeholder="Password"
            />
            <br />
            <input
              className="form-control password"
              value={passwordTwo}
              onChange={event =>
                this.setState(byPropKey('passwordTwo', event.target.value))
              }
              type="password"
              placeholder="Confirm Password"
            />
            <br />
            <div id="buttons">
              <button
                // disabled={isInvalid}
                type="submit"
                className="btn btn-primary signUp"
              >
                Sign Up
              </button>{' '}
            </div>
            {error && <p>{error.message}</p>}
          </div>
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
