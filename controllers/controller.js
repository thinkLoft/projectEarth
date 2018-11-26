//require in schema models
<<<<<<< HEAD
const db = require('../models/export.js');
const moment = require('moment');
let today = moment().startOf('day');
let tomorrow = moment(today).endOf('day');

=======
const db = require("../models/export.js");
>>>>>>> 86f9830a9ca024c678cbbd165e188467ceae32dd
//creatung object to export
module.exports = {
  //find everything
  findEverything: function(req, res) {
    db.myCalendar
      .find()
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error + " error");
        }
      });
  },
  //create a new User
  newUser: function(req, res) {
    db.myCalendar
      .create({
        userEmail: req.body.userEmail,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime
      })
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(500).json(error);
        }
      });
  },
  //take userEmail and update one startDate and endDate
  update: function(req, res) {
    db.myCalendar
      .update(
        { userEmail: req.params.userEmail },
        { startDate: req.body.startDate, endDate: req.body.endDate }
      )
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error);
        }
      });
  },
<<<<<<< HEAD
  //find one userEMail
  findOnePerson: function(req, res) {
    db.myCalendar
      .find({ userEmail: req.query.userEmail })
=======

  newTask: function(req, res) {
    db.toDo
      .create({
        email: req.body.email,
        date: req.body.date,
        title: req.body.title,
        task: req.body.task,
        deadline: req.body.deadline
      })
>>>>>>> 86f9830a9ca024c678cbbd165e188467ceae32dd
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
<<<<<<< HEAD
          res.status(422).json(error);
        }
      });
  },
  //find by the email and Date
  findTodaysEvent: function(req, res) {
    db.myCalendar
      .find({
        userEmail: req.query.userEmail,
        date: req.query.date
      })
=======
          res.status(500).json(error);
        }
      });
  },

  findAllToDos: function(req, res) {
    db.toDo
      .find()
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error + " error");
        }
      });
  },

  updateToDos: function(req, res) {
    db.toDo
      .update(
        { email: req.params.email },
        {
          title: req.body.title,
          task: req.body.task,
          deadline: req.body.deadline
        }
      )
>>>>>>> 86f9830a9ca024c678cbbd165e188467ceae32dd
      .then(success => {
        res.json(success);
      })
      .catch(error => {
        if (error) {
          res.status(422).json(error);
        }
      });
  }
};
//update startDate and endDate

/*//require in models schema
const db = require('../models/export.js');
//create a simplified object from calling on database
module.exports = {
  findEverything: function(req, res) {
    db.myCalendar
      .find()
      .then(personal => res.json(personal + ' Success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },

  //create a new user
  newUser: function(req, res) {
    db.myCalendar
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
    db.myCalendar
      .findById(req.params.id)
      .then(personal => res.json(personal + ' success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },

  //finding a user by their id
  findByUid: function(req, res) {
    db.myCalendar
      .findOne({ uid: req.params.uid  })
      .then(personal => res.json(personal + ' success'))
      .catch(error =>
        res.status(422).json(error + ' Sorry, something went wrong')
      );
  },
  //update start date and end date for personal calendar
  //keep the start date and end date infor in req.body
  update: function(req, res) {
    console.log(req.body);
    db.myCalendar
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
