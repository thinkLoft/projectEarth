//Require mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//To dos Schema
let toDosSchema = new Schema({
  //Name of the task
  title: {
    type: String,
    required: true
  },
  //Description of the task
  task: {
    type: String,
    required: true
  },
  //Deadline by which task must be completed
  deadline: {
    type: String,
    required: true
  }
});

//Create the toDos model
const toDo = mongoose.model("toDo", toDosSchema);
module.exports = toDo;
