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

function game() {

  let userScore = 0;
  let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toUpperCase();
    let computerChoice = computerSelection.toUpperCase();
  
    while (playerChoice === "ROCK") {
      if (computerChoice === "ROCK") {
        return "Tie! You must try again" + " You: " + userScore + " Computer: " + computerScore;
      } else if (computerChoice === "PAPER") {
        computerScore += 1;
        return "You Lost! Paper beats Rock!" + " You: " + userScore + " Computer: " + computerScore;
      } else {
        userScore += 1;
        return "Congratulations! Rock destroys Scissors!" + " You: " + userScore + " Computer: " + computerScore;
      }
    }
  }
  
  const playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors!");
  console.log(playerSelection)
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  
  console.log(playRound(playerSelection, computerSelection));
}

game();