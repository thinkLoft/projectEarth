import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./toDoForm.css";
import API from "../utils/api";

export default class freeForm extends React.Component {
  state = {
    //inputting user's email from as part of entry
    email: this.props.email,
    //date & time of the entry
    date: new Date(),
    //title or name of the task
    title: "",
    //task that the user wants to accomplish
    task: "",
    //deadline by which the task must be completed
    deadline: ""
  };

  //this React function is used to handle multiple controlled input elements
  //the handler function chooses what to do based on the value of the event.target.name
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  saveTask = (a, b, c, d, e) => {
    API.newTask({
      email: a,
      date: b,
      title: c,
      task: d,
      deadline: e
    })
      .then(success => {
        console.log(success);
        console.log("Task successfully added to the db");
      })
      .catch(error => {
        if (error) {
          console.log("Task not successfully added to the db");
        }
      });
  };

  //this will be the code to handle pulling the tasks from the and displaying on the screen

  // //see all startEndDates
  // handleSeeAllAvailabilities = event => {
  //   event.preventDefault();
  //   if (
  //     this.state.email !== null &&
  //     this.state.email != 'undefined' &&
  //     this.state.date !== null
  //   ) {
  //     console.log('hello');
  //   }
  // };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.title && this.state.task && this.state.deadline) {
      console.log({
        email: this.state.email,
        date: this.state.date,
        title: this.state.title,
        task: this.state.task,
        deadline: this.state.deadline
      });
      this.saveTask(
        this.state.email,
        this.state.date,
        this.state.title,
        this.state.task,
        this.state.deadline
      );
    }
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container task-list">
        <Form>
          <FormGroup>
            <div className="row">
              <div className="col-lg-8 title">
                <Label for="title">Title</Label>
                <Input
                  id="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  type="text"
                  placeholder="Title of your task"
                />
                <Label for="details">Task</Label>
                <textarea
                  id="task-details"
                  value={this.state.task}
                  onChange={this.handleInputChange}
                  name="task"
                  placeholder="Enter a description of your task here"
                  type="text"
                />
                <Label for="deadline">Complete by:</Label>
                <Input
                  type="date"
                  id="deadline"
                  name="deadline"
                  onChange={this.handleInputChange}
                  value={this.state.deadline}
                  placeholder="00:00"
                />
                <Input
                  id="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                />
                <Input
                  id="date"
                  type="text"
                  value={this.state.date}
                  onChange={this.handleInputChange}
                  name="date"
                />

                <Button
                  className="submit"
                  value="Submit"
                  onClick={this.handleFormSubmit}
                >
                  Add Task
                </Button>
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
