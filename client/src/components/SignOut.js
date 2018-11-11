import React from "react";
import * as routes from "../constants/routes";

import { auth } from "../firebase";

const SignOutButton = () => (
  <a href={routes.LANDING} onClick={auth.doSignOut}>
    Sign Out
  </a>
);

export default SignOutButton;
