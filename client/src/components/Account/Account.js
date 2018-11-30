import React from 'react';
import './Account.css';
import Form from '../Form';
<<<<<<< HEAD
import ToDoForm from '../toDoForm';
=======
>>>>>>> master

//sending props user email and uid
const AccountPage = ({ authUser }) => (
  <div id="addTime" className="container">
    <Form email={authUser.email} uid={authUser.uid} />
    <ToDoForm email={authUser.email} uid={authUser.uid} />
  </div>
);

export default AccountPage;
