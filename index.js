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

// Round functions
function playRound(playerSelection, computerSelection) {
  let playerChoice;
  let computerChoice;
  
  playerChoice = playerSelection.toUpperCase();
  computerChoice = computerSelection.toUpperCase();


  // Check to see correct input
  if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS"){
  
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
  else {
    return "Please enter a valid choice";
  }
}

// Function to actually play the game and appropriately determine winner
function game() {

  let userScore = 0;
  let computerScore = 0;
  let gameRounds = 1;

  
    // to be changed back to 5 rounds
    while (gameRounds <= 1) {
      console.log(playRound(playerSelection, getComputerChoice()));
      gameRounds += 1;
    }

    if (userScore > computerScore) {
      console.log("You won the game! " + getScore(userScore, computerScore));
    } else if (userScore < computerScore) {
      console.log("You Lost the game! " + getScore(userScore, computerScore));
    } else {
      console.log("Seriously? A tie? How Disappointing " + getScore(userScore, computerScore));
    }
}

//game();

let userScore = 0;
let computerScore = 0;
let gameRounds = 1;


let playerShow = document.getElementById('player-choice');
let compShow = document.getElementById('computer-choice');

let para = document.getElementById('result');



// Handling Rock selection on button press
const btnRock = document.getElementById('btn-rock');
console.log(btnRock);

btnRock.addEventListener('click', () => {
  const playerSelection = 'rock';
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  playerShow.textContent = "Player's Choice: Rock";
  compShow.textContent = "Computer's Choice: " + computerChoice;
  para.textContent = playRound(playerSelection, computerChoice);
  gameRounds += 1;
});


// Handling Paper selection on button press
const btnPaper = document.getElementById('btn-paper');
console.log(btnPaper);

btnPaper.addEventListener('click', () => {
  const playerSelection = 'paper';
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  playerShow.textContent = "Player's Choice: Paper";
  compShow.textContent = "Computer's Choice: " + computerChoice;
  para.textContent = playRound(playerSelection, computerChoice);
  gameRounds += 1;
});


// Handling Scissors selection on button press
const btnScissors = document.getElementById('btn-scissors');
console.log(btnScissors);

btnScissors.addEventListener('click', () => {
  const playerSelection = 'scissors';
  console.log(playerSelection);
  const computerChoice = getComputerChoice();
  playerShow.textContent = "Player's Choice: Scissors";
  compShow.textContent = "Computer's Choice: " + computerChoice;
  para.textContent = playRound(playerSelection, computerChoice);
  gameRounds += 1;
});

