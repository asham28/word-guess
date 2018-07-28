//======================================================================================
//MAJOR TASK #1: CREATING VARIABLES
//======================================================================================

// create an array of words to guess
var heroArray = ["captainamerica", "ironman", "wasp", "hulk", "wonderwoman", "blackwidow", "nebula", "thor", "deadpool", "spiderman", "quicksilver", "blackpanther", "scarletwitch", "gamora", "starlord"];

// chosen word will be stored here
var heroPick = "";

// create array to store letters of chosen word 
var lettersInHeroPick = [];

// number to appear in answer div. dependent on chosen word
var blanks = 0;

// will store the empty answers (underscores and correct letters)
var underScores = [];

//holds the letters guessed 
var letterGuessed = "";

// holds all the wrong guesses
var wrongGuesses = [];

// game counters
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//======================================================================================
// MAJOR TASK #2: SET START CONDITIONS
//======================================================================================

//1. Start the game
function startGame() {

    // reset answer div and stats
    underScores = [];
    wrongGuesses = [];
    guessesLeft = 9;

    // pick random hero
    heroPick = heroArray[Math.floor(Math.random() * heroArray.length)];
    lettersInHeroPick = heroPick.split("");
    blanks = lettersInHeroPick.length;

    // FOR TESTING ONLY
    console.log(heroPick);



    // populate answer div with appropriate number of underscores (based on lettersInHeroPick)
    // this is based on number of letters in heroPick
    for (var i = 0; i < blanks; i++) {
        underScores.push("_");
    }

    //reset HTML elements 
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");
    document.getElementById("myAudio").pause();
}

//======================================================================================
// MAJOR TASK #3: LOGIC CONDITIONS
//======================================================================================

function checkLetters(letter) {
    //toggle whether user letter is found anywhere in the word
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (heroPick[i] === letter) {
            letterInWord = true;
        }
    }

    // identify correct letter and push letter into correct spot on answer div 
    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (heroPick[j] === letter) {
                underScores[j] = letter;
            }
        }

    } else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }

}

//======================================================================================
// MAJOR TASK #4: RESET THE GAME
//======================================================================================
function roundOver() {

    //Keep track of statistics in HTML elements 
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("answer").innerHTML = underScores.join(" ");
    document.getElementById("guesses").innerHTML = wrongGuesses.join(" ");


    //=================
    //WINING SCENARIO
    //=================


    if (lettersInHeroPick.toString() === underScores.toString()) {
        wins++
        document.getElementById("myAudio").play();
        
        alert("You win!");
        document.getElementById("wins").innerHTML = wins; 

        startGame();
    }
    //=================
    // LOSING SCENARIO
    // ================
    else if (guessesLeft === 0) {
        losses++;
        alert("You lose");
        document.getElementById("losses").innerHTML = losses;

        startGame();
    }
}

//======================================================================================
// MAJOR TASK #5: START GAME AND CHECK TO SEE IF ROUND IS OVER 
//======================================================================================

startGame();
document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundOver();
}