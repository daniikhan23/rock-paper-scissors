// function to get computer's choice of options

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) { 
    return "Rock";
  } else if (num == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toUpperCase();
  let computerChoice = computerSelection.toUpperCase();

  while (playerChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      return "Tie! You must try again";
    } else if (computerChoice === "PAPER") {
      return "You Lost! Paper beats Rock!";
    } else {
      return "Congratulations! Rock destroys Paper!";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));