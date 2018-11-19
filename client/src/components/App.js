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
import { firebase } from "../firebase";
import Availability from "./Availability";
import axios from "axios";
import API from "../utils/api.js";

import * as routes from "../constants/routes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
      loaded: false
    };
  }
  //show user's email, displayName, phoneNumber, and photoURL
  /*showUser = () => {
    if (this.state.authUser !== null && this.state.authUser !== "undefined") {
      const userUid = this.state.authUser.uid;
      const usersEmail = this.state.authUser.email;
      //const userName = this.state.authUser.displayName;
      console.log(userUid, usersEmail);
      console.log("uid : " + this.state.authUser.uid);
      this.saveUser(userUid, usersEmail);
      console.log("done");
    } else if (this.state.authUser === null) {
      console.log("no user is logged in");
    }
  };
  //
  saveUser = (a, b) => {
    console.log("saving user");
    if (
      this.state.authUser !== null &&
      this.state.authUser !== "undefined" &&
      this.state.authUser !== "error"
    ) {
      console.log("a, b: " + a, b);
      API.newUser({
        uid: a,
        userEmail: b
      })
        .then(res => {
          console.log("Success");
          console.log(res);
        })
        .catch(error => {
          console.log("saveUser(): " + error);
        });
    }
  };
  */

  componentDidMount() {
    firebase.auth.onAuthStateChanged(blah => {
      blah
        ? this.setState({ authUser: blah })
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
          <Navigation
            authUser={this.state.authUser} /*clog={this.showUser()}*/
          />
          <hr />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route
            exact
            path={routes.SIGN_UP}
            component={SignUpPage}
            //saveNew={this.saveUser}
            //clog={this.showUser()}
          />
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
          <Route exact path={routes.AVAILABILITY} component={Availability} />
          <Route exact path={routes.LOGIN} component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
