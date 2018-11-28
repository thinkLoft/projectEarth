import React from "react";
import "./toDo.css";
import Form from "../toDoForm";

const ToDoPage = ({ authUser }) => (
  <div id="addTask" className="container">
    <Form email={authUser.email} uid={authUser.uid} />
  </div>
);

export default ToDoPage;
