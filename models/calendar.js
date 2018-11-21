//require in mongoose npm
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create calendar Schema
let calenderSchema = new Schema({
  //userEmail
  userEmail: {
    type: String,
    unique: true,
    required: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  //nice to haves
  masterCalender: [
    {
      type: Schema.Types.ObjectId,
      ref: 'masterCalender'
    }
  ]
});
const myCalender = mongoose.model('myCalender', calenderSchema);
module.exports = myCalender;

/*//require in mongoose npm package
const mongoose = require('mongoose');
const validator = require('validator');
//create a new schema model
const Schema = mongoose.Schema;
//create calenderSchema
let calenderSchema = new Schema({
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
  //association with other people for shared calenders
  masterCalender: [
    {
      type: Schema.Types.ObjectId,
      ref: 'masterCalender'
    }
  ]
});
//create the article model with the articleSchema
const myCalender = mongoose.model('myCalender', calenderSchema);
module.exports = myCalender;
*/
