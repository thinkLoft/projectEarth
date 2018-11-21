//require in router
const express = require('express');
const router = express.Router();
const personalCalender = require('../../controllers/controller.js');
//for mvp
//create userEmail and one startDate and one endDate
router
  .use('/')
  .post(personalCalender.newUser)
  .get(personalCalender.findEverything);
//update userEmail's startDate and endDate
router.use('/update').put(personalCalender.update);
module.exports = router;

/*//hit backend route /
//we post a new users information and save into db
//for testing purposes findall all users
router
  .route("/")
  .post(personalCalender.newUser)
  .get(personalCalender.findEverything);
//find a user by their id
//update a users personalCalender's startDate and endDate
router.route("/:id").get(personalCalender.findById);
//finds by uid and posts to the db for new dates
router
  .route("/uid/:uid")
  .get(personalCalender.findByUid)
  .post(personalCalender.update);
//export the router
module.exports = router;*/
