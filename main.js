var computerGuess;
var userGuessLog = [];  
var attempts = 0; 
var maxAttempts =10;

function maxGuess() {
    maxGuess = 10; 
}

function newGame () {
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

attempts++; 
document.getElementById("attempts").innerHTML = attempts;



if (userGuess > computerGuess) {
 document.getElementById("textOut").innerHTML = "Too high of a number!";
 document.getElementById('inputBox').value="";
} else if (userGuess < computerGuess) {
 document.getElementById("textOut").innerHTML = "The number is too low!";
 document.getElementById('inputBox').value="";
} else { 
 document.getElementById("textOut").innerHTML = "correct!"; 
}
}

