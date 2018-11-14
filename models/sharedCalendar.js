//require in mongoose npm package
const mongoose = require('mongoose');
//create a new schema class
const Schema = mongoose.Schema;
//create schema for comments
const sharedCalenderSchema = new Schema({
  masterCalenderId: {
    type: String,
    required: false
  },
  //date
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  }
});
const masterCalender = mongoose.model('masterCalender', sharedCalenderSchema);
module.exports = masterCalender;
