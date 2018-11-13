import React, { Component } from "react";
import Calendar from "react-calendar";
import Modal from "./Modal";

class UserCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar onChange={this.onChange} value={this.state.date} />
        <Modal />
      </div>
    );
  }
}

export default UserCalendar;
