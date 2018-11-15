//heroku has its own node environment, so only requiring in dotenv if not production
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
//require in express server
const express = require('express');
//require in mongoose for database storage
const mongoose = require('mongoose');
const app = express();
//port listening
const PORT = process.env.PORT || 3001;
//static pathing
const path = require('path');
//backend mongoose routes
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }
//use routes file
app.use(routes);
//locally connect mongoose to mongo db under specified name; in production use heroku's addons
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/projectearth',
  { useNewUrlParser: true }
);
// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});
//'./client/build/index.html'
//listen in on port
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
