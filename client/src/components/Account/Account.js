import React from 'react';
import './Account.css';
import Form from '../Form';

//sending props user email and uid
const AccountPage = ({ authUser }) => (
  <div id="addTime" className="container">
    <Form email={authUser.email} uid={authUser.uid} />
  </div>
);

export default AccountPage;
