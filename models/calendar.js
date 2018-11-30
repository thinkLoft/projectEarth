//require in mongoose npm
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create calendar Schema
let calendarSchema = new Schema({
  //userEmail
  userEmail: {
    type: String,
    //unique: true,
    required: true
  },
  title: { type: String, required: true },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  //nice to haves
  masterCalendar: [
    {
      type: Schema.Types.ObjectId,
      ref: 'masterCalendar'
    }
  ]
});
const myCalendar = mongoose.model('myCalendar', calendarSchema);
module.exports = myCalendar;

/*//require in mongoose npm package
const mongoose = require('mongoose');
const validator = require('validator');
//create a new schema model
const Schema = mongoose.Schema;
//create calendarSchema
let calendarSchema = new Schema({
  //userEmail, intially commenting out required: true for testing
  uid: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }
  },
  //link for the article
  name: {
    type: String
  },
  //personal Calendar
  personalCalendar: [
    {
      startDate: Date,
      endDate: Date
    }
  ],
  //association with other people for shared calendars
  masterCalendar: [
    {
      type: Schema.Types.ObjectId,
      ref: 'masterCalendar'
    }
  ]
});
//create the article model with the articleSchema
const myCalendar = mongoose.model('myCalendar', calendarSchema);
module.exports = myCalendar;
*/
