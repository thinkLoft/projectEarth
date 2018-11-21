import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Form.css";
import Calendar from "react-calendar";
import api from "../utils/api";

export default class freeForm extends React.Component {
  state = {
    email: this.props.email,
    date: new Date(),
    startTime: "",
    endTime: ""
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.startTime && this.state.endTime) {
      api.addEvent({
        email: this.state.email,
        date: this.state.date,
        startTime: this.state.startTime,
        endTime: this.state.endTime
      });
    }
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
