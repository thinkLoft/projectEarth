import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import './Navigation.css';
import icon from './images/icon.jpg';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className="calendarIcon" src={icon} alt="calendarIcon" />
    <Link to={routes.LANDING}>Free Time</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav authorized">
        <li className="nav-item active">
          <Link to={routes.HOME}>
            Home<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li className="nav-item">
          <Link to={routes.AVAILABILITY}>Availability</Link>
        </li>
        <li className="nav-item">
          <Link to={routes.TODO}>To-Do</Link>
        </li>
        <SignOutButton />
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img className="calendarIcon" src={icon} alt="calendarIcon" />
    <Link to={routes.LANDING}>Free Time</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav unauthorized">
        <li className="nav-item active">
          <Link to={routes.LANDING}>
            Landing<span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={routes.SIGN_IN}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to={routes.SIGN_UP}>Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
