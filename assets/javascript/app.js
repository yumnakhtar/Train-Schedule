

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDubxRiFCrMeeTA5xkqLBNm2MMxD-T7clY",
    authDomain: "trainschedule-ba9b5.firebaseapp.com",
    databaseURL: "https://trainschedule-ba9b5.firebaseio.com",
    projectId: "trainschedule-ba9b5",
    storageBucket: "",
    messagingSenderId: "530754338576"
  };
  firebase.initializeApp(config);
var database = firebase.database();

//listens for click on submit-train button
$(document).on("click", "#submit-train", function(){
    event.preventDefault();
//grabs puts
var name = $(".name").val();
var destination = $(".destination").val();
var frequency = $(".frequency").val();
//creates objext with new inputs
var trainEntry = {};
trainEntry["name"] = name;
trainEntry["destination"] = destination;
trainEntry["frequency"] = frequency;
trainEntry["addDate"] = firebase.database.ServerValue.TIMESTAMP;
//puts object into firebase as child
database.ref(name).push(trainEntry);
})

//printing onto DOM
database.ref().orderByChild("addDate").on("child_added", function(snapshot){
console.log("so far so good");

})