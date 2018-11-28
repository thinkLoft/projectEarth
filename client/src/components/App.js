import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation";
import Login from "./login/";
import LandingPage from "./Landing";
import SignUpPage from "./signup/";
import SignInPage from "./signin/";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import ToDoPage from "./toDo/";
import { firebase } from "../firebase";
import Availability from "./Availability";

import * as routes from "../constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      loaded: false
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      user
        ? this.setState({ authUser: user })
        : this.setState({ authUser: null });
      this.setState({ loaded: true });
    });
  }
  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact
            path={routes.HOME}
            render={props => (
              <HomePage authUser={this.state.authUser} {...props} />
            )}
          />
          <Route
            exact
            path={routes.ACCOUNT}
            render={props => (
              <AccountPage authUser={this.state.authUser} {...props} />
            )}
          />
          <Route
            exact
            path={routes.AVAILABILITY}
            render={props => (
              <Availability authUser={this.state.authUser} {...props} />
            )}
          />

          <Route
            exact
            path={routes.TODO}
            render={props => (
              <ToDoPage authUser={this.state.authUser} {...props} />
            )}
          />
          <Route exact path={routes.LOGIN} component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
