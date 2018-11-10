import React from 'react';

import './addFreeTime.css';
const AddFreeTime = () => (
  <div id="addTime" class="container">
    <div class="container calendar">
      Calendar will go here
    </div>
    <div class="row date">
      Date will go here
    </div>
    <div class="row range">
      <div class="col rangeBegin">
        Start
      </div>
      <div class="col rangeEnd">
        End
      </div>
    </div>
    <button class="btn btn-primary add">Add</button>
  </div>

);
export default AddFreeTime;