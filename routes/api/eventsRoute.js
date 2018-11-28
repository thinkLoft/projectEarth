const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/events"
router
  .route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:email"
router
  .route("/:email")
  .get(eventsController.findByEmail)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
