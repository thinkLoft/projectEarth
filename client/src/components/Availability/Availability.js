import React from "react";
import "fullcalendar/dist/fullcalendar.css";

import "fullcalendar/dist/fullcalendar.js";
// import "fullcalendar/dist/fullcalendar.print.min.css";
import "./Availability.css";
import Calendar from "./External";
// import "./Calendar.css";
import ReactDOM from "react-dom";
import FullCalendar from "fullcalendar-reactwrapper";
import External from "./External.js";
import "./External.css";

import $ from "jquery";
import "moment/min/moment.min.js";

const Availability = () => (
  <div id="seeTime" id="app" class="container">
    <div class="container detailedCalendar">
      <External />
      <FullCalendar />
    </div>
  </div>
);

export default Availability;
