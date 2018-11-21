//require in models schema
const db = require('../models/export.js');
//create a simplified object from calling on database
module.exports = {
  findEverything: function(req, res) {
    db.myCalender
      .find()
      .then(personal => res.json(personal + ' Success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },

  //create a new user
  newUser: function(req, res) {
    db.myCalender
      .create({
        uid: req.body.uid,
        userEmail: req.body.userEmail
      })
      .then(personal => res.json(personal + ' Success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },
  findById: function(req, res) {
    db.myCalender
      .findById(req.params.id)
      .then(personal => res.json(personal + ' success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },

  //finding a user by their id
  findByUid: function(req, res) {
    db.myCalender
      .findOne({ uid: req.params.uid /*_id: req.params.id*/ })
      .then(personal => res.json(personal + ' success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },
  //update start date and end date for personal calender
  //keep the start date and end date infor in req.body
  update: function(req, res) {
    console.log(req.body);
    db.myCalender
      .update(
        { uid: req.params.uid },
        {
          $push: {
            personalCalendar: {
              startDate: new Date(req.body.startDate),
              endDate: new Date(req.body.endDate)
            }
          }
        }
      )
      .then(personal => res.json(personal))
      .catch(error => {
        res.status(422).json(error + ' Sorry, something went wrong');
      });
  }
  /*{ _id: req.params.id },
        {
          $set: {
            'personalCalendar.$.startDate': req.body.startDate,
            'personalCalendar.$.endDate': req.body.endDate
          }
        }
      )
      .then(personal => res.json(personal))
      .catch(error =>
        res.status(422).json(error + 'Sorry, something went wrong')
      );
  }*/
};
