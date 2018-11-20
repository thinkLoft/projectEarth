import React from 'react';
import './Account.css';
import UserCalendar from '../UserCalendar';
import Form from '../Form';
import { firebase } from '../../firebase';

let authUser;
let authUid;
firebase.auth.onAuthStateChanged(user => {
  if (user !== null) {
    authUser = user.email;
    authUid = user.uid;
    console.log(user);
    console.log(authUser, authUid);
  } else {
    // No user is signed in.
    console.log('user login status: There is no logged in user');
  }
});
//sending props user email and uid
const AccountPage = ({ authUser }) => (
  <div id="addTime" className="container">
    <Form email={authUser.email} uid={authUser.uid} />
  </div>
);

export default AccountPage;
