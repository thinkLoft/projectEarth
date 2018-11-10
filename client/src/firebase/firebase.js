import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDf64i8iNacWByhBUNZUKq5SQw7RguwtIg",
  authDomain: "freetime-35743.firebaseapp.com",
  databaseURL: "https://freetime-35743.firebaseio.com",
  projectId: "freetime-35743",
  storageBucket: "freetime-35743.appspot.com",
  messagingSenderId: "297857687124"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
