//require in mongoose npm package
const mongoose = require('mongoose');
//create a new schema class
const Schema = mongoose.Schema;
//create schema for comments
const sharedCalendarSchema = new Schema({
  masterCalendarId: {
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
const masterCalendar = mongoose.model('masterCalendar', sharedCalendarSchema);
module.exports = masterCalendar;
