if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectearth");
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
