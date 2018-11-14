//require in router
const router = require('express').Router();
const personalCalender = require('../controllers/controller.js');

//hit backend route /account
//we post a new users information and save into db
//find a user by their id
//update a users personalCalender's startDate and endDate
router
  .route('/account')
  .post(personalCalender.newUser)
  .get(personalCalender.findById)
  .post(personalCalender.update);
//export the router
module.exports = router;
