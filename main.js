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
      // if the user's guess is larger than the computers the message below will be dynamically added to the page. 
    document.getElementById("textOut").innerHTML = "Too high of a number!";
    //clears the input box for the user's next turn.
    document.getElementById("inputBox").value = "";

    //if the user's guess is lower than the computer the text below will be added to the page 
  } else if (userGuess < computerGuess) {
    document.getElementById("textOut").innerHTML = "The number is too low!";
    //clears the uinput box for the next user input
    document.getElementById("inputBox").value = "";
    //when the user's guess and the computer's guess are equal because no other situations matter in this game.
  } else {
    document.getElementById("textOut").innerHTML = "You are Correct! You have won!";
  }
}
