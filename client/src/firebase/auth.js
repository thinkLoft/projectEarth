import { auth } from './firebase';

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut();

// Password Reset
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

//on state change firebase function.
/*When user is not signed in, this will be null. Upon signing up or being logged 
  the onAuthStateChanged function will display the user's 
  email, display name(if it exists), phone number (if it exists), and the photo url (if it exists)*/
//no need to export this function; upon login and signup user information will be shown
auth.onAuthStateChanged(user => {
  if (user != null) {
    console.log(`Current User: ${user.email}`);
  } else {
    // No user is signed in.
    console.log('user login status: There is no logged in user');
  }
});
