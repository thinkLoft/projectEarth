import React from 'react';
import 'fullcalendar/dist/fullcalendar.css';

import 'fullcalendar/dist/fullcalendar.js';
// import "fullcalendar/dist/fullcalendar.print.min.css";
import './Availability.css';

import ReactDOM from 'react-dom';
import FullCalendar from 'fullcalendar-reactwrapper';

import $ from 'jquery';
import 'moment/min/moment.min.js';

/*const AvailabilityPage = props => {
  console.log(props.authUser.email);
  return (
    <div id="seeTime" id="app" className="container">
      <div className="container detailedCalendar">
        <FullCalendar />
      </div>
    </div>
  );
};*/
class AvailabilityPage extends React.Component {
  state = {
    events: [
      {
        title: 'Test 1',
        start: '2018-11-27',
        end: '2018-11-28'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-11-05T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-11-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-11-11',
        end: '2018-11-13'
      },
      {
        title: 'Meeting',
        start: '2018-11-12T10:30:00',
        end: '2018-11-12T12:30:00'
      },
      {
        title: 'ajhfbusbfubfb',
        start: '2018-11-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-11-28'
      }
    ]
  };

  render() {
    return (
      <div id="fullCalendar-Component">
        <FullCalendar
          id="calendarId"
          header={{
            left: 'prev next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
          }}
          navLinks={true} // can click day/week names to navigate views
          editable={true}
          eventLimit={true} // allow "more" link when too many events
          events={this.state.events}
        />
      </div>
    );
  }
}

export default AvailabilityPage;
