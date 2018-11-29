//import react from react
import React from 'react';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import './Availability.css';
import ReactDOM from 'react-dom';
import FullCalendar from 'fullcalendar-reactwrapper';
import $ from 'jquery';
import 'moment/min/moment.min.js';
import axios from 'axios';
import API from '../../utils/api.js';
class AvailabilityPage extends React.Component {
  state = {
    email: this.props.authUser.email,
    fullarray: [],
    events: [
      {
        title: [],
        start: [],
        end: []
      }
    ]
  };
  componentDidMount() {
    this.getTodaysAvailabilities();
  }
  /*changing = () => {
    this.setState({ title: 'aijfnf', start: '2018-11-07', end: '2018-11-08' });
  };*/
  getTodaysAvailabilities = () => {
    API.findOne({ userEmail: this.state.email })
      .then(result => {
        this.setState({ fullarray: result.data });
        this.state.fullarray.map(freetimes => {
          this.setState({ start: freetimes.startTime, end: freetimes.endTime });
        });
        console.log(this.state.start, this.state.end);
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
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
