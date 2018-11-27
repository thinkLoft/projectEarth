//an extra file so shared calendar and personal calendar can be hit under one route
//require in router
const express = require('express');
const router = express.Router();
//require in routes files
const myCalendar = require('./routes.js');

// personal user calendar
//future...supporting shared calendar
router.use('/mycalendar', myCalendar);
//export file router
module.exports = router;
