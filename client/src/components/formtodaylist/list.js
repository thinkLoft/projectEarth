import React from 'react';
import moment from 'moment';
const List = props => {
  console.log(props.value);
  let formatDate = moment(props.value).format('YYYY/MM/DD');
  return (
    <div>
      <h3>{formatDate}</h3>
      {props.children}
    </div>
  );
};
export default List;
