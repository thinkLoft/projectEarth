import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";
import './Navigation.css';
import icon from './images/icon.jpg'


const Navigation = ({ authUser }) => (

  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="calendarIcon" src={icon} alt="calendarIcon" />
    <Link to={routes.LANDING}>Free Time</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav authorized">
        <li class="nav-item active">
          <Link to={routes.HOME}>Home<span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li class="nav-item">
          <Link to={routes.AVAILABILITY}>Availability</Link>
        </li>
        <SignOutButton />
      </ul>

    </div>
  </nav>
);

const NavigationNonAuth = () => (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <img class="calendarIcon" src={icon} alt="calendarIcon" />
    <Link to={routes.LANDING}>Free Time</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav unauthorized">
        <li class="nav-item active">
          <Link to={routes.LANDING}>Landing<span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
          <Link to={routes.SIGN_IN}>Login</Link>
        </li>
        <li class="nav-item">
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
