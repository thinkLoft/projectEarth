//require in router
const router = require('express').Router();
const personalCalender = require('../../controllers/controller.js');

//hit backend route /
//we post a new users information and save into db
//for testing purposes findall all users
router
  .route('/')
  .post(personalCalender.newUser)
  .get(personalCalender.findEverything);
//find a user by their id
//update a users personalCalender's startDate and endDate
router
  .route('/:id')
  .get(personalCalender.findById)
  .put(personalCalender.update);
//export the router
module.exports = router;
