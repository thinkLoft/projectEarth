import React, { Component } from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import API from '../../utils/api.js';

moment.locale('en-ca');
const localizer = BigCalendar.momentLocalizer(moment);

class AvailabilityPage extends Component {
  state = {
    email: this.props.authUser.email,
    cal_events: [
      //State is updated via componentDidMount
    ]
  };
  convertDate = date => {
    return moment.utc(date).toDate();
  };

  componentDidMount() {
    API.findOne({ userEmail: this.state.email })
      .then(response => {
        let appointments = response.data;
        for (let i = 0; i < appointments.length; i++) {
          appointments[i].startTime = this.convertDate(
            appointments[i].startTime
          );

          appointments[i].endTime = this.convertDate(appointments[i].endTime);
        }

        this.setState({
          cal_events: appointments
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  eventStyleGetter = (event, startTime, endTime, isSelected) => {
    console.log(event);
    let backgroundColor = '#5f797a' + event.hexColor;
    let style = {
      backgroundColor: backgroundColor,
      borderRadius: '0px',
      opacity: 0.8,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
      style: style
    };
  };
  render() {
    const { cal_events } = this.state;

    return (
      <div className="myfreetime-calendar">
        <header className="calendar-header">
          <h1 className="myfreetime-h1">My Calendar</h1>
        </header>
        <div style={{ height: 700 }}>
          <BigCalendar
            localizer={localizer}
            events={cal_events}
            step={30}
            defaultView="month"
            views={['month', 'week', 'day']}
            defaultDate={new Date()}
            onSelectSlot={this.slotSelected}
            onSelectEvent={this.eventSelected}
            eventPropGetter={this.eventStyleGetter}
            startAccessor="startTime"
            endAccessor="endTime"
          />
        </div>
      </div>
    );
  }
}

export default AvailabilityPage;

/*//import react from react
import React from 'react';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';
import './Availability.css';
import ReactDOM from 'react-dom';
import FullCalendar from 'fullcalendar-reactwrapper';
import moment from 'moment';
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
  //changing = () => {
  //this.setState({ title: 'aijfnf', start: '2018-11-07', end: '2018-11-08' });
  //};
  getTodaysAvailabilities = () => {
    API.findOne({ userEmail: this.state.email })
      .then(result => {
        this.setState({ fullarray: result.data });
        this.state.fullarray.map(freetimes => {
          this.setState({ start: freetimes.startTime, end: freetimes.endTime });
          console.log(`start: ${this.state.start} and end: ${this.state.end}`);
        });
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
          id="fullCalendar"
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

export default AvailabilityPage;*/
