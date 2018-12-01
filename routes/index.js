const path = require('path');
const express = require('express');
const router = express.Router();
const myCalendarRoutes = require('./personalCalendar');
//personal calendar routes
router.use('/api/personal', myCalendarRoutes);
//if no routes hit, send to React application
router.use(function(req, res) {
  //dont use direct paths, to avoid breaking in production
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});
//'../client/build/index.html'
//export file for server use
module.exports = router;
