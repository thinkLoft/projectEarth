//an extra file so shared calender and personal calender can be hit under one route
//require in router
const express = require('express');
const router = express.Router();
//require in routes files
const myCalender = require('./routes.js');

// personal user calender
//future...supporting shared calender
router.use('/mycalendar', myCalender);
//export file router
module.exports = router;
