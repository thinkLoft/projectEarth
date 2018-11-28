import React from "react";
import "fullcalendar/dist/fullcalendar.css";

import "fullcalendar/dist/fullcalendar.js";
// import "fullcalendar/dist/fullcalendar.print.min.css";
import "./Availability.css";

import FullCalendar from "fullcalendar-reactwrapper";

import "moment/min/moment.min.js";

const AvailabilityPage = () => (
  <div id="seeTime" id="app" class="container">
    <div className="container detailedCalendar">
      <FullCalendar />
    </div>
  </div>
);

export default AvailabilityPage;
