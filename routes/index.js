const path = require("path");
const router = require("express").Router();
const myCalenderRoutes = require("./personalCalender");
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

//personal calender routes
router.use("/personal", myCalenderRoutes);
//if no routes hit, send to React application
router.use(function(req, res) {
  //dont use direct paths, to avoid breaking in production
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});
//'../client/build/index.html'
//export file for server use
module.exports = router;
