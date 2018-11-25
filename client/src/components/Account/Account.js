import React from 'react';
import './Account.css';
import UserCalendar from '../UserCalendar';
import Form from '../Form';
import { firebase } from '../../firebase';
//importing API calls
import API from '../../utils/api.js';

let authUser;
let authUid = '';
firebase.auth.onAuthStateChanged(user => {
  if (user !== null) {
    authUser = user.email;
    authUid = user.uid;
    //console.log(user);
    console.log(authUser, authUid);
    //find user by uid, if user does not exisit make a user
    /* API.findUid(authUid).then(data => {
      console.log('hit api authuid @ account js line 19');
      console.log(data);
      if (!data.length) {
        console.log('if not data.length uid: ', authUid);
        API.newUser(authUid, authUser)
          .then(dataInformation => {
            console.log(
              'Success hit api new user @ line 23 ' + dataInformation
            );
          })
          .catch(error => {
            if (error) {
              console.log(error);
            }
          });
      }
    });*/
    //
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
