
    //MAJOR TASK #1: CREATE CATEGORY OF WORDS TO GUESS
    //============================================================

    // create an array of words to guess
    var heroArray = ["captainamerica", "ironman", "wasp", "hulk", "wonderwoman"];

// create an array of acceptable letters to use for guessing 
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"
];

//computer chooses a random item from the array heroArray
heroPick = heroArray[Math.floor(Math.random() * heroArray.length)];
console.log(heroPick);

//empty array to store answers in 
var answerArray = [];
//empty array to store guessesSoFar guesses in
var guesses = document.getElementById("guesses");
var guessesSoFar = [];
var userGuess = null;

//some globals
var s;
var wins = 0;
var losses = 0;
var guessesLeft = 10;

//link word guess to underscores 

function startUp() {
    for (var i = 0; i < heroPick.length; i++) {
        answerArray[i] = "_";
    }
    //put them in a string
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s
}


//MAJOR TASK #2: DISPLAY USERGUESS (letters) ON UNDERSCORES
//============================================================

document.onkeyup = function (event) {

        //1. store keyUp as a variable 
        var userGuess = (event.key).toLowerCase();
        console.log(userGuess);


        for (var i = 0; i < heroPick.length; i++) {


            //DISPLAY guessesSoFar GUESSES
            //2. if userGuess is not incorrect (aka: wrong letter) AND it is part of the alphabet array, display letter to the array guessesSoFar. for indexOf: -1 means not found 
            if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
                guessesSoFar[guessesSoFar.length] = userGuess;

            }

            // NEED HELP don't display correct letter in guessesSoFar field
            if (userGuess.indexOf(heroPick[i]) >= 0) {
                guessesSoFar[guessesSoFar] = " ";
                // if it is a new letter then decrease remaining guesses by 1


            }


            //MAJOR TASK 3: LOGIC CONDITIONS
            //============================================================

            //1. CORRECT CONDITION: 
            //============================================================

            //compare userGuess to heroPick. if heroPick contains a letter that the user typed in
            if (userGuess === heroPick[i]) {
                // assign it to userGuess
                answerArray[i] = userGuess;

            }
            /*
                            if (userGuess === heroPick[i] && answerArray.indexOf("_" === 0)) { //NEED HELP: currently adds win for each letter, not word
                                wins++;
                                guessesLeft = 9;
                                guessesSoFar = [];

                                //computer chooses a random item from the array heroArray
                                heroPick = heroArray[Math.floor(Math.random() * heroArray.length)];
                                console.log(heroPick);

                                startUp();


                            }

                            */

            //1. INCORRECT CONDITION: 
            //============================================================


            // if (userGuess !== heroPick) {
            //     // assign it to userGuess
            //     guessesLeft--; 

            // }

            // if guessesLeft gets to 0 then record it as a loss
            // and then reset guessesLeft to 9, and empty the guessesSoFar array
            // also have the computer make a new random pick
            // if (guessesLeft == 0) {
            //     losses++;
            //     console.log("You lost!");


            //     guessesLeft = 10;
            //     guessesSoFar = [];
            //     startUp();







        }









        //Keep track of statistics in HTML elements 

        document.getElementById("answer").innerHTML = answerArray.join(" "); //displays correct letters found in chosen word in answer div 

        document.getElementById("guesses").innerHTML = guessesSoFar; // displays letters not found in chosen word in guessesSoFar div 
        document.getElementById("wins").innerHTML = wins;




        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses-left").innerHTML = guessesLeft;






    }