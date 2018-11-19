//require in mongoose npm package
const mongoose = require('mongoose');
const validator = require('validator');
//create a new schema model
const Schema = mongoose.Schema;
//create calenderSchema
let calenderSchema = new Schema({
  //userEmail, intially commenting out required: true for testing
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
    /*,
    required: true*/
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
