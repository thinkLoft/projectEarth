const path = require("path");
const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const myCalendarRoutes = require('./personalCalendar');
//personal calendar routes
router.use('/api/personal', myCalendarRoutes);
=======
const myCalenderRoutes = require("./personalCalender");

//personal calender routes
router.use("/api/personal", myCalenderRoutes);

>>>>>>> 86f9830a9ca024c678cbbd165e188467ceae32dd
//if no routes hit, send to React application
router.use(function(req, res) {
  //dont use direct paths, to avoid breaking in production
  const index = path.join(__dirname, "build", "index.html");
  res.sendFile(index);
});
//'../client/build/index.html'
//export file for server use
module.exports = router;
