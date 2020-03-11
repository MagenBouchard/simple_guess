//variables are set 
var computerGuess;
var userGuessLog = [];
var attempts = 0;
var maxAttempts = 10;

function maxGuess() {
  maxGuess = 10;
}

function newGame() {
  window.location.reload();
}

function init() {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
}

function compareGuess() {
  var userGuess = document.getElementById("inputBox").value;
  // console.log(userGuess);

  userGuessLog.push(userGuess);
  // console.log(userGuessLog);
  
  // increments the number of attempts by the user
  attempts++;

  //displays the number of attempts to the page
  document.getElementById("attempts").innerHTML = attempts;


  //compares the number the computer has guessed to the user's input
  if (userGuess > computerGuess) {
    document.getElementById("textOut").innerHTML = "Too high of a number!";
    document.getElementById("inputBox").value = "";
  } else if (userGuess < computerGuess) {
    document.getElementById("textOut").innerHTML = "The number is too low!";
    document.getElementById("inputBox").value = "";
  } else {
    document.getElementById("textOut").innerHTML = "You are Correct!";
  }
}
