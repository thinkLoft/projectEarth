//import for CRUD methods
import axios from 'axios';
//export for usuage
export default {
  //insert requests here
  //save a new user from firebase; insert request into firebase callback
  newUser: function() {
    return axios.post('/personal/mycalender');
  },
  //find user by id, id is passed as params; change on controller directory if needed
  findUser: function(id) {
    return axios.get('/personal/mycalender/' + id);
  },
  //update user's start date and end date for calender
  addEvent: function(id) {
    return axios.get('/personal/mycalender/' + id);
  }
};
