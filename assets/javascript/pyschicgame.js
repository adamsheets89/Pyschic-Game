
//determines the computer's choice
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variables for win, loss, guess
var wins = 0;
var losses = 0;
var guesses = 9;
var userLetters = []

function addLetters(userChoice) {
    userLetters.push(userChoice);
    console.log("Your Guesses so far: " + userLetters.join(", "));
}
;

//use to grab elements in our markup

var userWinsDiv = document.getElementById("wins");
var userLossesDiv = document.getElementById("losses");
var userGuessLeftDiv = document.getElementById("guesses");
var userLettersDiv = document.getElementById("userLetters");

//function for when a key is pushed
document.onkeyup = function (event) {

    //determines letter picked
    var userChoice = event.key;

    //Random computer choice
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

    //lists the letters the user has 

    var myArray = [userChoice]

    //Logic to determine outcomes and score

    if (userChoice === computerChoice) {
        wins++ && guesses--;
    } else if (userChoice != computerChoice) {
        guesses--;
        addLetters(userChoice)
    }
 
    if (guesses === 0) {
        losses++;
        guesses = 9
        userLetters = []
    }

    //update the scoreboard
    userWinsDiv.textContent = wins;
    userLossesDiv.textContent = losses;
    userGuessLeftDiv.textContent = guesses;
    userLettersDiv.textContent = userLetters.join(", ");
}