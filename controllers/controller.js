//require in models schema
const db = require('../models/export.js');
//create a simplified object from calling on database
module.exports = {
  //create a new user
  newUser: function(req, res) {
    db.myCalender
      .create({ userEmail: req.body, name: req.body })
      .then(personal => res.json(personal + ' Sucess'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },
  //finding a user by their id
  findById: function(req, res) {
    db.myCalender
      .findById(req.params.id)
      .then(personal => res.json(personal + ' sucess'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },
  //update start date and end date for personal calender
  //keep the start date and end date infor in req.body
  update: function(req, res) {
    db.myCalender
      .updateMany(
        { _id: req.params.id },
        {
          $set: {
            'personalCalendar.$.startDate': req.body.startDate,
            'personalCalendar.$.endDate': req.body.endDate
          }
        }
      )
      .then(personal => res.json(personal + ' sucess'))
      .catch(error =>
        res.status(422).json(error + 'Sorry, something went wrong')
      );
  }
};
