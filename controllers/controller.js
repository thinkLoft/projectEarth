//require in schema models
const db = require('../models/export.js');
//creatung object to export
module.exports = {
  //find everything
  findEverything: function(req, res) {
    db.myCalender
      .findAll({})
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error + ' error');
        }
      });
  },
  //create a new User
  newUser: function(req, res) {
    db.myCalender
      .create({
        userEmail: req.body.userEmail,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      })
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error);
        }
      });
  },
  //take userEmail and update one startDate and endDate
  update: function(req, res) {
    db.myCalender
      .update(
        { userEmail: req.body.userEmail },
        { startDate: req.body.startDate, endDate: req.body.endDate }
      )
      .then(success => {
        res.json(success).catch(error => {
          if (error) {
            res.status(422).json(error);
          }
        });
      });
  }
};
//update startDate and endDate

/*//require in models schema
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
      .findOne({ uid: req.params.uid  })
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

};*/
