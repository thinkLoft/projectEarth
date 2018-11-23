import React from 'react';
import './toDo.css';
import Form from '../toDoForm';
import { firebase } from '../../firebase';


let authUser;
let authUid = '';
firebase.auth.onAuthStateChanged(user => {
  if (user !== null) {
    authUser = user.email;
    authUid = user.uid;
    console.log(authUser, authUid);

  } else {

    console.log('user login status: There is no logged in user');
  }
});

const ToDoPage = ({ authUser }) => (
  <div id="addTask" className="container">
    <Form email={authUser.email} uid={authUser.uid} />
  </div>
);

export default ToDoPage;