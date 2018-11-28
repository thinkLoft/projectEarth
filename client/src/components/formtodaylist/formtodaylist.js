import React from "react";
import "./formtodaylist.css";

const TodayAvails = props => {
  return (
    <div>
      <p>
        {props.startTime} to {props.endTime}
      </p>
    </div>
  );
};
export default TodayAvails;
