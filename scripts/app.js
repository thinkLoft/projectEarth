// Initialize Firebase
var config = {
  apiKey: "AIzaSyDf64i8iNacWByhBUNZUKq5SQw7RguwtIg",
  authDomain: "freetime-35743.firebaseapp.com",
  databaseURL: "https://freetime-35743.firebaseio.com",
  projectId: "freetime-35743",
  storageBucket: "freetime-35743.appspot.com",
  messagingSenderId: "297857687124"
};

firebase.initializeApp(config);

// REAL-TIME LISTENER
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // user is signed in.
  } else {
    // No user is signed in.
  }
});

$(document).ready(function() {
  var db = firebase.database();
});
