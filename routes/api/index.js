const router = require("express").Router();
const eventRoutes = require("./eventsRoute");

// Book routes
router.use("/events", eventRoutes);

module.exports = router;
