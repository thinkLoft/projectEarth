<<<<<<< HEAD
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';
import Calendar from 'react-calendar';
import API from '../utils/api';
import moment from 'moment';
import TodayAvails from './formtodaylist/formtodaylist.js';
import List from './formtodaylist/list.js';
=======
import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import Calendar from "react-calendar";
import API from "../utils/api";
import moment from "moment";
>>>>>>> master

export default class freeForm extends React.Component {
  state = {
    email: this.props.email,
    // uid: this.props.uid,
    date: new Date(),
    startTime: '',
    endTime: '',
    startend: []
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
  saveUser = (a, b, c, d) => {
    API.newUser({
      userEmail: a,
      date: b,
      startTime: c,
      endTime: d
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
    let todaysDate = moment(this.state.date).format('YYYY/MM/DD');
    console.log('hello from todays availabilitie fn on line 46');
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
            'Date: ' + allData.date,
            'start time: ' + allData.startTime,
            'end time: ' + allData.endTime
          );
        });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };

  //see all todays availabilities
  /* handletodayAvailabilities = event => {
    event.preventDefault();
    if (
      this.state.email !== null &&
      this.state.email !== "undefined" &&
      this.state.date !== null
    ) {
      console.log("hello from today");
      let todaysDate = moment(this.state.date).format("YYYY/MM/DD");

      if (todaysDate !== null) {
        //this.todaysAvailabilities(todaysEmail, todaysDate);
        console.log("test");
        //this.allMyAvailabilties(this.state.email);
      }
    } else {
      console.log("state not defined or null");
      return;
    }
  };*/
  //see all startEndDates
  handleSeeAllAvailabilities = event => {
    event.preventDefault();
    if (
      this.state.email !== null &&
      this.state.email !== 'undefined' &&
      this.state.date !== null
    ) {
      console.log('hello from see all');
      this.allMyAvailabilties(this.state.email);
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.startTime && this.state.endTime) {
      let newDate = moment(this.state.date).format('YYYY/MM/DD');
      let momentFormattedDate = moment(this.state.date).format();
      let indexOfString = momentFormattedDate.indexOf('T');
      let newIndexOfStartTime =
        momentFormattedDate.substring(0, 11) + this.state.startTime + ':00';
      let newIndexOfEndTime =
        momentFormattedDate.substring(0, 11) + this.state.endTime + ':00';
      if (this.state.startTime < this.state.endTime) {
        this.saveUser(
          this.state.email,
          newDate,
          newIndexOfStartTime,
          newIndexOfEndTime
        );
      } else {
      }
    }
  };

  render() {
    return (
      <div className="container calendar-form">
        {/* add freetime form */}
        <Calendar
          name="date"
          onChange={this.onChange}
          value={this.state.date}
        />
        <div className="row">
          <div className="col-6">
            <Form>
              <FormGroup>
                <div className="row">
                  <div className="col-lg-8 mycalendar">
                    <h2>Add Free Time</h2>

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
                      Ad Freetime
                    </Button>
                  </div>
                  {/* <div className="col-md-4 seeingAllEvents">
                    <div className="buttonEvents">
                      <div>
                        <List value={this.state.date}>
                          {this.state.startend.map(startending => {
                            return (
                              <TodayAvails
                                key={startending._id}
                                newDate={startending.date}
                                startTime={startending.startTime}
                                endTime={startending.endTime}
                              />
                            );
                          })}
                        </List>
                      </div>

                    </div> */}
                  {/* </div> */}
                </div>
              </FormGroup>
            </Form>
          </div>

          <div className="col-6">
            {/* add task form */}
            <Form>
              <FormGroup>
                <div className="row addTask">
                  <div className="col-lg-8 title">
                    <h2>Add a Task</h2>
                    <Label for="title">Title</Label>
                    <Input id="task-title" />
                    <label for="exampleFormControlTextarea1">Details</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    />
                    <Label for="date">Date</Label>
                    <Input
                      id="todayDate"
                      type="text"
                      placeholder={this.state.date}
                      name="date"
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

                    <Button className="submit">Add Task</Button>
                  </div>
                </div>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
