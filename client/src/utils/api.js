//import for CRUD methods
import axios from 'axios';
//export for usuage
export default {
  //create a new user with userEmail, startDate, endDate
  newUser: function(data) {
    return axios.post('/api/personal/mycalendar', data);
  },
  //find all
  findEverything: function() {
    return axios.get('/api/personal/mycalendar');
  } /*
  //update one startdate endate
  updateDate: function(id, data) {
    return axios.put('/api/personal/mycalendar/update' + id, data);
  },*/,
  findOne: function(data) {
    return axios.get('/api/personal/mycalendar/one', {
      params: {
        userEmail: data.userEmail
      }
    });
  },
  findTodaysEvent: function(data) {
    return axios.get('/api/personal/mycalendar/events', {
      params: {
        userEmail: data.userEmail,
        date: data.date
      }
    });
  },
  saveTask: function(data) {
    return axios.post('/api/personal/mycalendar/todos', data);
  }
};
