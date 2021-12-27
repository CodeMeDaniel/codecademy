let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);    
}

// function which compare guesses and determine which guess is closest to the target number
const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
    const humanCompareSecret = Math.abs(secretNumber - humanGuess);
    const computerCompareSecret = Math.abs(secretNumber - computerGuess);
    return humanCompareSecret <= computerCompareSecret;
}

//updateScore updates the score after each round.
const updateScore = (winner) => {
    if (winner === `human`) {
        humanScore++ ;  
    }   else {
        computerScore++;
    }
}

//advanceRound update round number after each round.
const advanceRound = () => {
    currentRoundNumber += 1;
}

console.log(generateTarget());