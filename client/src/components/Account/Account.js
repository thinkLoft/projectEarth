import React from "react";
import "./Account.css";
import UserCalendar from "../UserCalendar";
import Form from "../Form";

const AccountPage = () => (
  <div id="addTime" className="container">
    <div className="container calendar">
      <UserCalendar />
    </div>
    <Form />
  </div>
);

export default AccountPage;
