import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";
import "./Navigation.css";

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <ul>
    <Link to={routes.LANDING}>Free Time</Link>
    <Link to={routes.HOME}>Home</Link>
    <Link to={routes.ACCOUNT}>Account</Link>
    {/* <Link to={routes.AVAILABILITY}>Availability</Link> */}
    <SignOutButton />
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <Link to={routes.LANDING}>Landing</Link>
    <Link to={routes.SIGN_IN}>Login</Link>
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </ul>
);

export default Navigation;
