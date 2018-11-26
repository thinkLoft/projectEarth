import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';
import { Calendar, TileContent } from 'react-calendar';
import API from '../utils/api';
import moment from 'moment';
import TodayAvails from './formtodaylist/formtodaylist.js';
// import API from "../utils/api";

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
        console.log(`thisstartEnd: ${this.state.startend}`);
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
  handletodayAvailabilities = event => {
    event.preventDefault();
    if (
      this.state.email !== null &&
      this.state.email !== 'undefined' &&
      this.state.date !== null
    ) {
      console.log('hello from today');
      let todaysDate = moment(this.state.date).format('YYYY/MM/DD');
      let todaysEmail = this.state.email;
      if (todaysDate !== null) {
        //this.todaysAvailabilities(todaysEmail, todaysDate);
        console.log('test');
        //this.allMyAvailabilties(this.state.email);
      }
    } else {
      console.log('state not defined or null');
      return;
    }
  };
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
    let object = {
      one: { date: this.state.date, startTime: 1230, endTime: 1311 },
      two: { date: this.state.date, startTime: 1420, endTime: 1540 }
    };
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
                  <div>
                    {this.state.startend.map(startending => {
                      return (
                        <TodayAvails
                          key={startending._id}
                          //date={startending.date}
                          startTime={startending.startTime}
                          endTime={startending.endTime}
                        />
                      );
                    })}
                  </div>
                  {/*<Button id="SeeAll" onClick={this.handleSeeAllAvailabilities}>
                    See All
                  </Button>*/}
                </div>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
