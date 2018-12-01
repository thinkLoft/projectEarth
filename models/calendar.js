//require in mongoose npm
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create calendar Schema
let calendarSchema = new Schema({
  //userEmail
  userEmail: {
    type: String,
    //unique: true,
    required: true
  },
  title: {
    type: String,
    required: false
  },
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
  title: {
    type: String,
    required: false
  },
  //nice to haves
  masterCalendar: [
    {
      type: Schema.Types.ObjectId,
      ref: "masterCalendar"
    }
  ]
});
const myCalendar = mongoose.model("myCalendar", calendarSchema);
module.exports = myCalendar;
