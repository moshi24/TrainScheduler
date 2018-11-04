// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmIwmr7UtcBXdGur7RWvaZrlLA5tP31sg",
    authDomain: "trainschedule-3a7d7.firebaseapp.com",
    databaseURL: "https://trainschedule-3a7d7.firebaseio.com",
    projectId: "trainschedule-3a7d7",
    storageBucket: "trainschedule-3a7d7.appspot.com",
    messagingSenderId: "1051085163052"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();
  
  var trainName = "";
  var destination = "";
  var trainTime = 0;
  var frequency = 0;
 

  $("#submit").on("click", function(event) {
    event.preventDefault();
    
    trainName = $("#name").val().trim();
    destination = $("#destination").val().trim();
    trainTime = $("#time").val().trim();
    frequency = $("#frequency").val().trim();

    dataRef.ref().push({

      trainName: trainName,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

