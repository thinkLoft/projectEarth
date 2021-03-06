import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import Calendar from "react-calendar";
import API from "../utils/api";
import moment from "moment";

export default class freeForm extends React.Component {
  state = {
    email: this.props.email,
    // uid: this.props.uid,
    date: new Date(),
    startTime: "",
    endTime: "",
    startend: [],
    title: ""
  };
  componentDidMount() {
    this.todaysAvailabilities();
  }
  // For all other inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // for Calendar
  onChange = date => {
    this.setState({ date });
    this.todaysAvailabilities();
  };
  saveUser = (a, b, c, d, e) => {
    API.newUser({
      userEmail: a,
      date: b,
      startTime: c,
      endTime: d,
      title: e
    })
      .then(() => {
        this.todaysAvailabilities();
      })
      .catch(error => {
        if (error) {
          console.log(`API new USER error line 37 on form js: ${error}`);
        }
      });
  };
  //see all availabilities based on today
  todaysAvailabilities = () => {
    let todaysDate = moment(this.state.date).format("YYYY/MM/DD");
    console.log("hello from todays availabilitie fn on line 46");
    API.findTodaysEvent({ userEmail: this.state.email, date: todaysDate })
      .then(res => {
        //map over data and console log start and endtimes
        this.setState({ startend: res.data });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };
  //test
  allMyAvailabilties = gamma => {
    API.findOne({ userEmail: gamma })
      .then(res => {
        res.data.map(allData => {
          console.log(
            "Date: " + allData.date,
            "start time: " + allData.startTime,
            "end time: " + allData.endTime
          );

          return true;
        });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };

  //see all startEndDates
  handleSeeAllAvailabilities = event => {
    event.preventDefault();
    if (
      this.state.email !== null &&
      this.state.email !== "undefined" &&
      this.state.date !== null
    ) {
      console.log("hello from see all");
      this.allMyAvailabilties(this.state.email);
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.startTime && this.state.endTime) {
      let newDate = moment(this.state.date).format("YYYY/MM/DD");
      let momentFormattedDate = moment(this.state.date).format();
      let newIndexOfStartTime =
        momentFormattedDate.substring(0, 11) + this.state.startTime + ":00";
      let newIndexOfEndTime =
        momentFormattedDate.substring(0, 11) + this.state.endTime + ":00";
      if (this.state.startTime < this.state.endTime) {
        this.saveUser(
          this.state.email,
          newDate,
          newIndexOfStartTime,
          newIndexOfEndTime,
          this.state.title
        );
        // clear form
        this.setState({
          date: new Date(),
          startTime: "",
          endTime: "",
          startend: [],
          title: ""
        });
      } else {
      }
    }
  };

  render() {
    return (
      <div className="row calendarForm">
        <div className="col-8">
          <div className="container calendar-form">
            {/* add freetime form */}
            <Calendar
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
        </div>
        <div className="col-4">
          <Form>
            <FormGroup>

              <div className="mycalendar">
                <h2>Add Event</h2>

                <Input
                  id="myEmail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email@example.com"
                />

                <Input
                  id="todayDate"
                  type="text"
                  placeholder={this.state.date}
                  name="date"
                />
                <Label for="title">Task / FreeTime</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  onChange={this.handleInputChange}
                  value={this.state.title}
                  placeholder="title"
                />
                <Label for="startTime">Start</Label>
                <Input
                  type="time"
                  name="startTime"
                  id="startTime"
                  onChange={this.handleInputChange}
                  value={this.state.startTime}
                  placeholder="00:00"
                />
                <Label for="endTime">End</Label>
                <Input
                  type="time"
                  name="endTime"
                  id="endTime"
                  placeholder="00:00"
                  onChange={this.handleInputChange}
                />

                <Button
                  className="submit"
                  disabled={!(this.state.startTime && this.state.endTime)}
                  onClick={this.handleFormSubmit}
                >
                  Add Freetime
                  </Button>
              </div>

            </FormGroup>
          </Form>
        </div>
      </div>

    );
  }
}
