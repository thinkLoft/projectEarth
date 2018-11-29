import React from 'react';
import './formtodaylist.css';
import API from '../../utils/api';
const TodayAvails = props => {
  let nowStart = props.startTime.substring(11, 16);
  let nowEnd = props.endTime.substring(11, 16);
  return (
    <div>
      <p>
        {nowStart} to {nowEnd}
      </p>
    </div>
  );
};
export default TodayAvails;

/*export default class TodayAvails extends React.Component {
  state = {
    email: this.props.useremail,
    date: this.props.date,
    startend: [],
    test: []
  };
  componentDidMount() {
    this.todaysAvailabilities();
  }
  todaysAvailabilities = () => {
    let todaysDate = moment(this.state.date).format('YYYY/MM/DD');
    API.findTodaysEvent({ userEmail: this.state.email, date: todaysDate })
      .then(res => {
        //map over data and console log start and endtimes
        this.setState({
          startend: res.data
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
    console.log(this.state.startend);
    return (
      <div>
        <p>Hello</p>
        {this.state.startend.map(startending => {
          return (
            <div>
              <p>{startending._id}</p>
              <p>
                {startending.startTime} to {startending.endTime}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}*/
