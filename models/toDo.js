//Require mongoose
const mongoose = require("mongoose");

//Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//To dos Schema
let toDosSchema = new Schema({
  //Email of the user submitting the entry
  email: {
    type: String,
    required: true
  },
  //Date of the entry
  date: {
    type: Date,
    required: true
  },
  //Name of the task is a required string
  title: {
    type: String,
    required: true
  },
  //Description of the task is a required string
  task: {
    type: String,
    required: true
  },
  //Deadline by which task must be completed is a required string
  deadline: {
    type: String,
    required: true
  }
});

//Create the toDos model from the above Schema, using mongoose's model method
const toDo = mongoose.model("toDo", toDosSchema);

//Export the toDo model
module.exports = toDo;
