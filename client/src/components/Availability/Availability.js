import React, { Component } from "react";

import BigCalendar from "react-big-calendar";
import moment from "moment";
import "moment/locale/nb";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../../utils/api.js";

moment.locale("en-ca");
const localizer = BigCalendar.momentLocalizer(moment);

class AvailabilityPage extends Component {
  state = {
    email: this.props.authUser.email,
    cal_events: [
      //State is updated via componentDidMount
    ]
  };
  convertDate = date => {
    return moment(date).toDate();
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
            views={["month", "week", "day"]}
            defaultDate={new Date()}
            startAccessor="startTime"
            endAccessor="endTime"
          />
        </div>
      </div>
    );
  }
}

export default AvailabilityPage;
