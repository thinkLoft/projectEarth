//require in router
const express = require('express');
const router = express.Router();
const personalCalendar = require('../../controllers/controller.js');
//for mvp
//create userEmail and one startDate and one endDate
router
  .post('/', personalCalendar.newUser)
  .get('/', personalCalendar.findEverything);
router.get('/events', personalCalendar.findTodaysEvent);
router.get('/one', personalCalendar.findOnePerson);
//update userEmail's startDate and endDate
router.post('/update/:userEmail', personalCalendar.update);

router
  .post('/todos', personalCalendar.newTask)
  .get('/todos', personalCalendar.findAllToDos);
router.get('/one/todos', personalCalendar.findOneTodos);
//Update the task in the db
router.post('/update/:email', personalCalendar.update);

module.exports = router;

/*//hit backend route /
//we post a new users information and save into db
//for testing purposes findall all users
router
  .route("/")
  .post(personalCalendar.newUser)
  .get(personalCalendar.findEverything);
//find a user by their id
//update a users personalCalendar's startDate and endDate
router.route("/:id").get(personalCalendar.findById);
//finds by uid and posts to the db for new dates
router
  .route("/uid/:uid")
  .get(personalCalendar.findByUid)
  .post(personalCalendar.update);
//export the router
module.exports = router;*/
