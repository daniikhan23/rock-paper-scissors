let userScore = 0;
let computerScore = 0;
let gameRounds = 1;

// creating variables to store text data in relevant fields 
let playerShow = document.getElementById('player-choice');
let compShow = document.getElementById('computer-choice');
let para = document.getElementById('result');
let currentScore = document.getElementById('current-score');
let finalScore = document.getElementById('final-score');
const newGame = document.getElementById('btn-new-game');

// variables to store user choice on button press
const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');

// Reset Scores to 0
function resetGame() {
  userScore = 0;
  computerScore = 0;
}

// Resets round counter to 0
function resetRounds() {
  if (gameRounds > 5) {
    gameRounds = 1;
  }
}

// function to get computer's choice of option
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    default:
      return "Scissors";
  }
}

// Return Score
function getScore(userScore, computerScore) {
  return "You " + userScore + " - " + computerScore + " Computer";
}

//Declare Final Scorecard
function endOfGame(gameRounds) {
  if (gameRounds == 5) {
    if (userScore > computerScore) {
      finalScore.textContent = "You won the game!";
      resetGame();
  
    } else if (userScore < computerScore) {
      finalScore.textContent = "You Lost the game!";
      resetGame();
  
    } else {
      finalScore.textContent = "Seriously? A tie? How Disappointing";
      resetGame();
    }
  } else {
    finalScore.textContent = "";
  }
}

// Round functions
function playRound(playerSelection, computerSelection) {
  let playerChoice;
  let computerChoice;
  
  playerChoice = playerSelection.toUpperCase();
  computerChoice = computerSelection.toUpperCase();

  //Player Choice : Rock
  if (playerChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      return "Round " + gameRounds + ": " + " Tie! You must try again!";
    } 
    else if (computerChoice === "PAPER") {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Paper beats Rock!";
    } 
    else {
      userScore += 1;
      return "Round " + gameRounds + ": " + "You won! Rock destroys Scissors!";
    }
  }

  //Player Choice : Paper
  else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      userScore += 1;
      return "Round " + gameRounds + ": " + "You won! Paper smothered Rock to death!";
    } 
    else if (computerChoice === "PAPER") {
      return "Round " + gameRounds + ": " + "Tie! You must try again!";
    } 
    else {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Scissors cut up Paper!";
    }
  }

  //Player Choice : Scissors
  else if (playerChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Rock destroys Scissors!";
    } 
    else if (computerChoice === "PAPER") {
      userScore += 1;
      return "Round " + gameRounds + ": " + "You won! Scissors cut up Paper!";
    } 
    else {
      return "Round " + gameRounds + ": " + "Tie! You must try again!";
    }
  }
}

// Game function 
function game() {

  // Start New Game
  newGame.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    gameRounds = 1;
    playerShow.textContent = "";
    compShow.textContent = "";
    para.textContent = "Round 1";
    currentScore.textContent = "You 0 - 0 Computer";
    finalScore.textContent = "";
  })

  // Handling Rock selection on button press
  btnRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Rock";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    currentScore.textContent = getScore(userScore, computerScore);
    endOfGame(gameRounds);
    gameRounds += 1;
    resetRounds();
    
  });


  // Handling Paper selection on button press
  btnPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Paper";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    currentScore.textContent = getScore(userScore, computerScore);
    endOfGame(gameRounds);
    gameRounds += 1;
    resetRounds();
  });


  // Handling Scissors selection on button press
  btnScissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Scissors";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    currentScore.textContent = getScore(userScore, computerScore);
    endOfGame(gameRounds);
    gameRounds += 1;
    resetRounds();
  });
}

game();
