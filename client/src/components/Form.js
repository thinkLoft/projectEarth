import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';
import Calendar from 'react-calendar';
import API from '../utils/api';
import moment from 'moment';
// import API from "../utils/api";

export default class freeForm extends React.Component {
  state = {
    email: this.props.email,
    // uid: this.props.uid,
    date: new Date(),
    startTime: '',
    endTime: ''
  };

  // For all other inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // for Calendar
  onChange = date => this.setState({ date });
  saveUser = (a, b, c, d) => {
    API.newUser({
      userEmail: a,
      date: b,
      startTime: c,
      endTime: d
    })
      .then(success => {
        console.log(success);
        console.log(`Line 35 @line js file success`);
      })
      .catch(error => {
        if (error) {
          console.log(`API new USER error line 37 on form js: ${error}`);
        }
      });
  };
  //see all startEndDates
  handleSeeAllAvailabilities = event => {
    event.preventDefault();
    if (
      this.state.email !== null &&
      this.state.email !== 'undefined' &&
      this.state.date !== null
    ) {
      console.log('hello');
    }
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.startTime && this.state.endTime) {
      console.log({
        // uid: this.state.uid,
        email: this.state.email,
        date: this.state.date,
        startTime: this.state.startTime,
        endTime: this.state.endTime
      });
      let newDate = moment(this.state.date).format('YYYY/MM/DD');
      console.log(newDate);
      console.log('saving new user line 67 on form js');
      this.saveUser(
        this.state.email,
        newDate,
        this.state.startTime,
        this.state.endTime
      );
      console.log('after saving user @line 74 of form js');
    }
  };

  render() {
    return (
      <div className="container calendar-form">
        <Form>
          <FormGroup>
            <div className="row">
              <div className="col-lg-8 mycalendar">
                <Calendar
                  name="date"
                  onChange={this.onChange}
                  value={this.state.date}
                />
                <Label for="email">Email</Label>
                <Input
                  id="myEmail"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="email@example.com"
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

                <Button
                  className="submit"
                  disabled={!(this.state.startTime && this.state.endTime)}
                  onClick={this.handleFormSubmit}
                >
                  Ad Freetime
                </Button>
              </div>
              <div className="col-md-4 seeingAllEvents">
                <div className="buttonEvents">
                  <Button id="today">Today</Button>
                  <Button id="SeeAll">See All</Button>
                </div>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
