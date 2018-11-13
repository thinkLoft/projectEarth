import React from "react";
import "./Account.css";
import UserCalendar from "../UserCalendar";

const AccountPage = () => (
  <div id="addTime" className="container">
    <div className="container calendar">
      <UserCalendar />
    </div>
    <div className="row date">Date will go here</div>
    <div className="row range">
      <div className="col rangeBegin">Start</div>
      <div className="col rangeEnd">End</div>
    </div>
    <button className="btn btn-primary add">Add</button>
  </div>
);

export default AccountPage;
