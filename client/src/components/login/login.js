import React from 'react';

import './login.css';
const Login = () => (
  <div id="loginPage" class="container">
    <form id="login">
      <div id="loginForm" className="form-group">
        <h1 id="loginHead">Free Time</h1>
        <br />
        <input
          id="email"
          type="email"
          className="form-control email"
          placeholder="E-Mail"
        />
        <br />
        <input
          id="password"
          type="password"
          className="form-control password"
          placeholder="Password"
        />
        <br />
        <div id="buttons">
          <button id="loginbtn" className="btn btn-primary login">
            Login
          </button>
          <button id="signUp" className="btn btn-primary signUp">
            SignUp
          </button>
        </div>
      </div>
    </form>
  </div>
);
export default Login;
