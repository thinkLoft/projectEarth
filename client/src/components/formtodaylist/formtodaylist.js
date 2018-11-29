import React from 'react';
import './formtodaylist.css';

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
