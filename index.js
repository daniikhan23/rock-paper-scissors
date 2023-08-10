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

    if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS"){
    
      //Player Choice : Rock
    if (playerChoice === "ROCK") {
      if (computerChoice === "ROCK") {
        return "Tie! You must try again" + ", You: " + userScore + ", Computer: " + computerScore;
      } 
      else if (computerChoice === "PAPER") {
        computerScore += 1;
        return "You Lost! Paper beats Rock!" + ", You: " + userScore + ", Computer: " + computerScore;
      } 
      else {
        userScore += 1;
        return "Congratulations! Rock destroys Scissors!" + ", You: " + userScore + ", Computer: " + computerScore;
      }
    }

    //Player Choice : Paper
    if (playerChoice === "PAPER") {
      if (computerChoice === "ROCK") {
        userScore += 1;
        return "Congratulations! Paper smothered Rock to death" + ", You: " + userScore + ", Computer: " + computerScore;
      } 
      else if (computerChoice === "PAPER") {
        return "Tie! You must try again" + " You: " + userScore + ", Computer: " + computerScore;
      } 
      else {
        computerScore += 1;
        return "You Lost! Scissors cut up Paper" + ", You: " + userScore + ", Computer: " + computerScore;
      }
    }

    //Player Choice : Scissors
    if (playerChoice === "SCISSORS") {
      if (computerChoice === "ROCK") {
        computerScore += 1;
        return "You Lost! Rock destroys Scissors" + ", You: " + userScore + ", Computer: " + computerScore;
      } 
      else if (computerChoice === "PAPER") {
        userScore += 1;
        return "Congratulations! Scissors cut up Paper" + " You: " + userScore + ", Computer: " + computerScore;
      } 
      else {
        return "Tie! You must try again" + ", You: " + userScore + ", Computer: " + computerScore;
      }
    }
    } else {
      return "Please enter a valid choice";
    }
  }
  
  const playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors!");
  console.log("Player's Choice: " + playerSelection)
  const computerSelection = getComputerChoice();
  console.log("Computer's Choice: " + computerSelection);
  
  console.log(playRound(playerSelection, computerSelection));
}

game();