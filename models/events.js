const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  email: { type: String, required: true },
  endTime: { type: String, required: true },
  startTime: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
