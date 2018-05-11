

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

//algorithm for train times
var start = $(".start").val();
//creates object with new inputs
var trainEntry = {};
trainEntry["name"] = name;
trainEntry["destination"] = destination;
trainEntry["start"]=start;
trainEntry["frequency"] = frequency;
database.ref().push(trainEntry);
})

//printing onto DOM
database.ref().orderByChild("name").on("child_added", function(snapshot){

var sv = snapshot.val();

var name = sv.name;
var destination = sv.destination;
var frequency = sv.frequency;
var nextArrive  = 0;
var minAway = 0;



var trainSched = $("<tr>");
trainSched.append($("<td>").text(name));
trainSched.append($("<td>").text(destination));
trainSched.append($("<td>").text(frequency));
trainSched.append($("<td>").text(nextArrive));
trainSched.append($("<td>").text(minAway));

$(".newTrain").append(trainSched);
})