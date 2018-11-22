import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';
import Calendar from 'react-calendar';
import API from '../utils/api';
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
      this.saveUser(
        this.state.email,
        this.state.date,
        this.state.startTime,
        this.state.endTime
      );
    }
    console.log('hello from the submit');
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <div className="container calendar">
            <Calendar
              name="date"
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
          <Label for="email">Email</Label>
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="email@example.com"
          />
          <Label for="date">Date</Label>
          <Input type="text" placeholder={this.state.date} name="date" />
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
        </FormGroup>

        <Button
          className="submit"
          disabled={!(this.state.startTime && this.state.endTime)}
          onClick={this.handleFormSubmit}
        >
          Ad Freetime
        </Button>
      </Form>
    );
  }
}
