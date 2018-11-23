import React from "react";
import "fullcalendar/dist/fullcalendar.css";

import "fullcalendar/dist/fullcalendar.js";
// import "fullcalendar/dist/fullcalendar.print.min.css";
import "./Availability.css";

import ReactDOM from "react-dom";
import FullCalendar from "fullcalendar-reactwrapper";
// import External from "./External";
import ModalExample from "./Modal";

import $ from "jquery";
import "moment/min/moment.min.js";

const Availability = () => (
  <div id="seeTime" id="app" class="container">
    <div class="container detailedCalendar">
      <FullCalendar />
      <ModalExample />
    </div>
  </div>
);

export default Availability;
