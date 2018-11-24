import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formtodaylist.css';
import moment from 'moment';
//see all todays availabilities
const handletodayAvailabilities = event => {
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
      this.todaysAvailabilities(todaysEmail, todaysDate);
      //this.allMyAvailabilties(this.state.email);
    }
  } else {
    console.log('state not defined or null');
    return;
  }
};

const formTodayList = props => {
  console.log(props.userEmail, props.date);
  return <div>Hello</div>;
};

export default formTodayList;
