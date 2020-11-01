var location1 = Math.floor((Math.random() * 5));
var location2 = location1 + 1;
var location3 = location2 + 1;

var numOfHits = 0;
var numOfGuesses = 0;
var isSunk = false;
var userGuess;

while (!isSunk) {

    userGuess = window.prompt("guess: ");
    
    if (userGuess == null) {
        alert("come on you have to enter something");
    }

    if (userGuess >= 0 && userGuess <= 6) {
        if ((userGuess == location1) || (userGuess == location2) || (userGuess == location3)) {
            alert("Hit");
            numOfGuesses++;
            numOfHits++;
            if (numOfHits == 3) {
                alert(`You sunk the battleship. It took you ${numOfGuesses} guesses!`);
                isSunk = true;
            } 
        }
        else {
            alert("Miss");
            numOfGuesses++;
        }   
    }
    else {
        alert("Invalid input!");
    }

        
}