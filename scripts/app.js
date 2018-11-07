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
    console.log(user);
  } else {
    // No user is signed in.
    console.log("no user");
  }
});

$(document).ready(function() {
  // ================================
  // ======= Authentication =========
  // ================================

  // LOGIN LISTENER
  $(document).on("click", "#login", function() {
    email = $("#email")
      .val()
      .trim();
    pwd = $("#password")
      .val()
      .trim();

    // LOGIN FUNCTION
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  });

  // LOGOUT LISTENER
  $(document).on("click", "#logout", function() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log("Sign out Successfull");
      })
      .catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
      });
  });

  // SIGN UP  LISTENER
  $(document).on("click", "#signUp", function() {
    email = $("#email")
      .val()
      .trim();
    pwd = $("#password")
      .val()
      .trim();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then(function() {
        alert(
          "Account successfully created! You will be re-directed to the home page"
        );
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ...
      });
  });
});
