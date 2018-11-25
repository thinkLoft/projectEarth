import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './formtodaylist.css';
import moment from 'moment';
import API from '../../utils/api';

export default class TodayAvails extends React.Component {
  state = {
    email: this.props.useremail,
    date: this.props.date,
    startend: []
  };
  componentDidMount() {
    this.todaysAvailabilities();
  }
  todaysAvailabilities = () => {
    let todaysDate = moment(this.state.date).format('YYYY/MM/DD');
    API.findTodaysEvent({ userEmail: this.state.email, date: todaysDate })
      .then(res => {
        //map over data and console log start and endtimes
        res.data.map(times => {
          console.log(times.startTime, times.endTime);
          this.setState({
            starttime: times.startTime
          });
        });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };
  render() {
    console.log(this.state.email);
    console.log(this.state.date);
    console.log(this.state.endtime, this.state.starttime);
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}
