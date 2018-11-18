import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import Login from './login/';
import LandingPage from './Landing';
import SignUpPage from './signup/';
import SignInPage from './signin/';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import { firebase } from '../firebase';
import Availability from './Availability';
import axios from 'axios';
import API from '../utils/api.js';

import * as routes from '../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  //show user's email, displayName, phoneNumber, and photoURL
  /*showUser = () => {
    if (this.state.authUser !== null && this.state.authUser !== 'undefined') {
      const userUid = this.state.authUser.uid;
      const usersEmail = this.state.authUser.email;
      const userName = this.state.authUser.displayName;
      console.log(userUid, usersEmail, userName);
       console.log('uid : ' + this.state.authUser.uid);
      console.log(`The following is from showUser function\n
      Email: ${this.state.authUser.email}\n
      displayName: ${this.state.authUser.displayName}\n
      console.log('phoneNumber: ' + this.state.authUser.phoneNumber`);
      console.log('photoUrl : ' + this.state.authUser.photoURL);
      this.saveUser(userUid, usersEmail, userName);
      console.log('done');
    } else if (this.state.authUser === null) {
      console.log('no user is logged in');
    }
  };*/

  /*saveUser = (a, b, c) => {
    console.log('saving user');
    if (
      this.state.authUser !== null &&
      this.state.authUser !== 'undefined' &&
      this.state.authUser !== 'error'
    ) {
      console.log('a, b, c: ' + a, b, c);
      API.newUser({
        uid: a,
        userEmail: b,
        name: c
      })
        .then(res => {
          console.log('Success');
          console.log(res);
        })
        .catch(error => {
          console.log('saveUser(): ' + error);
        });
    }
  };*/

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route
            exact
            path={routes.SIGN_UP}
            component={SignUpPage}
            saveNew={this.saveUser}
          />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.ACCOUNT} component={AccountPage} />
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.AVAILABILITY} component={Availability} />
        </div>
      </Router>
    );
  }
}

export default App;
