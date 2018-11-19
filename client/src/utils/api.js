//import for CRUD methods
import axios from "axios";
//export for usuage
export default {
  //insert requests here
  //save a new user from firebase; insert request into firebase callback
  newUser: function() {
<<<<<<< HEAD
    return axios.post("/personal/mycalender");
  },
  //find user by id, id is passed as params; change on controller directory if needed
  findUser: function(id) {
    return axios.get("/personal/mycalender/" + id);
  },
  //update user's start date and end date for calender
  addEvent: function(id) {
    // return axios.get('/personal/mycalender/' + id);
    var hello = "hello";
    return hello;
=======
    return axios.post('/api/personal/mycalender');
  },
  //find user by id, id is passed as params; change on controller directory if needed
  findUser: function(id) {
    return axios.get('/api/personal/mycalender/' + id);
  },
  //update user's start date and end date for calender
  addEvent: function(id) {
    return axios.get('/api/personal/mycalender/' + id);
>>>>>>> changed routes path by adding /api infront, also put changes into utils folder; then commented out function in auth.js under firebase folder because user is defined in state
  }
};
