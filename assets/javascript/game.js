const computerChoices = ["hendrix", "morrison", "joplin", "beatles", "stones", "santana", "floyd", "slick", "barrett"];
let wins = 0;
let numberOfGuesses = 10;
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
let wordSpace = document.getElementById("word")
let wordScore = [];
let wordGuess = [];
let match;
let tally = 0;



var blankLoop = function() {
    for (i = 0; i < computerGuess.length; i++) {
        wordScore.push({letter: computerGuess[i], correct: false});
    }
    for (i = 0; i < computerGuess.length; i++) {
        var blank = document.createElement("span"); 
        blank.textContent = "_ " ;
        blank.setAttribute("id", i)
        wordSpace.appendChild(blank);
    }
}

var blankSwap = function() {
    for (i=0; i < wordScore.length; i++) {
        if (wordScore[i].correct === true) {
            var letter = document.getElementById(i);
            letter.textContent = wordScore[i].letter + " ";
        }
        else {
        }
    }
}

var displayGuess = function() {
    var displayGuess = document.getElementById("guessed");
    displayGuess.textContent = wordGuess;
}

var displayRemaining = function() {
    var displayRemaining = document.getElementById("remaining");
    displayRemaining.textContent = numberOfGuesses;
}
var displayWins = function() {
    var displayWins = document.getElementById("wins");
    displayWins.textContent = wins;
}

var guessMatch = function() {
    match = false;
    for (i = 0; i < computerGuess.length; i++) {
        if (userGuess === computerGuess[i]) {
            wordScore[i].correct = true;
            tally += 1;
            match = true;
        } 
    }
    if (match !== true) {
        if (wordGuess.length === 0) {
        wordGuess.push(userGuess);
        numberOfGuesses -= 1;
        }
        else {
            let duplicate = false;
            for (i = 0; i < wordGuess.length; i++) {
                if (userGuess === wordGuess[i]) {
                    duplicate = true;
                }
            }    
            if (duplicate === false) {
                wordGuess.push(userGuess);
                numberOfGuesses -= 1;
            }

            
        }
    }
        console.log(wordGuess)
        console.log(numberOfGuesses)   
}
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
var gameReset = function() {
    for (i = 0; i < computerGuess.length; i++) {
        removeElement(i);
    } 
}
var endGame = function() {
    if (numberOfGuesses === 0) {
        alert("You Have Lost! :(")
        numberOfGuesses = 10;
        wordGuess = [];
        wordScore = [];
        tally = 0;
        gameReset()
        displayRemaining();
        displayGuess();
        displayWins();
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        blankLoop(); 
    }
    if (tally === computerGuess.length) {
        alert("You Have Won! :)");
        wins += 1;
        tally = 0;
        numberOfGuesses = 10;
        wordGuess = [];
        wordScore = [];
        gameReset()
        displayRemaining();
        displayGuess();
        displayWins();
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        blankLoop(); 
    }
    console.log(wordScore);
    console.log(computerGuess);
}

blankLoop();
displayRemaining();
displayWins();

document.onkeyup = function(event) {
    userGuess = event.key;
    guessMatch();
    blankSwap();
    displayGuess();
    displayRemaining();
    displayWins();
    endGame();


    
}  
     
