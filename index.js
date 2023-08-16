let userScore = 0;
let computerScore = 0;
let gameRounds = 1;


let playerShow = document.getElementById('player-choice');
let compShow = document.getElementById('computer-choice');
let para = document.getElementById('result');
let finalScore = document.getElementById('final-score');
let newGame = document.getElementById('new-game');


const btnRock = document.getElementById('btn-rock');
console.log(btnRock);
const btnPaper = document.getElementById('btn-paper');
console.log(btnPaper);
const btnScissors = document.getElementById('btn-scissors');
console.log(btnScissors);



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

// Calculate Score
function getScore(userScore, computerScore) {
  return "You: " + userScore + " - " + computerScore + " Computer";
}

//Declare Final Scorecard
function endOfGame(gameRounds) {
  if (gameRounds == 5) {
    if (userScore > computerScore) {
      finalScore.textContent = "You won the game! " + getScore(userScore, computerScore);
      newGame.textContent = "Start New Game - Pick an option";
      userScore = 0;
      computerScore = 0;
      gameRounds = 1;
  
    } else if (userScore < computerScore) {
      finalScore.textContent = "You Lost the game! " + getScore(userScore, computerScore)
      newGame.textContent = "Start New Game - Pick an option";
      userScore = 0;
      computerScore = 0;
      gameRounds = 1;
  
    } else {
      finalScore.textContent = "Seriously? A tie? How Disappointing " + getScore(userScore, computerScore);
      newGame.textContent = "Start New Game - Pick an option";
      userScore = 0;
      computerScore = 0;
      gameRounds = 1;
    }
  } else {
    finalScore.textContent = "";
    newGame.textContent = "";
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
      return "Round " + gameRounds + ": " + " Tie! You must try again! " + getScore(userScore, computerScore);
    } 
    else if (computerChoice === "PAPER") {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Paper beats Rock! " + getScore(userScore, computerScore);
    } 
    else {
      userScore += 1;
      return "Round " + gameRounds + ": " + "Congratulations! Rock destroys Scissors! " + getScore(userScore, computerScore);
    }
  }

  //Player Choice : Paper
  else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      userScore += 1;
      return "Round " + gameRounds + ": " + "Congratulations! Paper smothered Rock to death! " + getScore(userScore, computerScore);
    } 
    else if (computerChoice === "PAPER") {
      return "Round " + gameRounds + ": " + "Tie! You must try again! " + getScore(userScore, computerScore);
    } 
    else {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Scissors cut up Paper! " + getScore(userScore, computerScore);
    }
  }

  //Player Choice : Scissors
  else if (playerChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      computerScore += 1;
      return "Round " + gameRounds + ": " + "You Lost! Rock destroys Scissors! " + getScore(userScore, computerScore);
    } 
    else if (computerChoice === "PAPER") {
      userScore += 1;
      return "Round " + gameRounds + ": " + "Congratulations! Scissors cut up Paper! " + getScore(userScore, computerScore);
    } 
    else {
      return "Round " + gameRounds + ": " + "Tie! You must try again! " + getScore(userScore, computerScore);
    }
  }
}

// Game function 
function game() {

  // Handling Rock selection on button press
  btnRock.addEventListener('click', () => {
    const playerSelection = 'rock';
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Rock";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    endOfGame(gameRounds);
    gameRounds += 1;
    if (gameRounds > 5) {
      gameRounds = 1;
    }
    
  });


  // Handling Paper selection on button press
  btnPaper.addEventListener('click', () => {
    const playerSelection = 'paper';
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Paper";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    endOfGame(gameRounds);
    gameRounds += 1;
    if (gameRounds > 5) {
      gameRounds = 1;
    }
  });


  // Handling Scissors selection on button press
  btnScissors.addEventListener('click', () => {
    const playerSelection = 'scissors';
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    playerShow.textContent = "Player's Choice: Scissors";
    compShow.textContent = "Computer's Choice: " + computerChoice;
    para.textContent = playRound(playerSelection, computerChoice);
    endOfGame(gameRounds);
    gameRounds += 1;
    if (gameRounds > 5) {
      gameRounds = 1;
    }
  });
}

game();
