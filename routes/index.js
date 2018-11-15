const path = require('path');
const router = require('express').Router();
const myCalenderRoutes = require('./personalCalender');
//personal calender routes
router.use('/personal', myCalenderRoutes);
//if no routes hit, send to React application
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
//export file for server use
module.exports = router;
