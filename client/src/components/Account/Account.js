import React from "react";
import "./Account.css";
import UserCalendar from "../UserCalendar";
import Form from "../Form";
import { firebase } from "../../firebase";

var authUser;
firebase.auth.onAuthStateChanged(user => {
  if (user) {
    authUser = user.email;
    console.log(authUser);
  } else {
    // No user is signed in.
    console.log("user login status: There is no logged in user");
  }
});

const AccountPage = ({ authUser }) => (
  <div id="addTime" className="container">
    <Form email={authUser.email} />
  </div>
);

export default AccountPage;
