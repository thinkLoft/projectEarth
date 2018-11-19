//import for CRUD methods
import axios from "axios";
//export for usuage
export default {
  //insert requests here
  //save a new user from firebase; insert request into firebase callback
  newUser: function(data) {
    return axios.post("/api/personal/mycalender", data);
  },
  //find user by id, id is passed as params; change on controller directory if needed
  findUser: function(id) {
    return axios.get("/api/personal/mycalender/" + id);
  },
  //update user's start date and end date for calender
  addEvent: function(uid) {
    return axios.post("/api/personal/mycalender/uid/" + uid);
  },
  findUid: function(uid) {
    return axios.get("/api/personal/mycalender/uid/" + uid);
  }
};
