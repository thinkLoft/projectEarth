//require in mongoose npm package
import Mongoose from 'mongoose';
//create a new schema class
const Schema = Mongoose.Schema;
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
