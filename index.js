// function to get user's choice of option
function askUser() {
  const playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors!");
  return playerSelection;
}

// function to get computer's choice of option

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

// Function to actually play the game and appropriately determine winner
function game() {

  let userScore = 0;
  let computerScore = 0;
  let gameRounds = 0;

  function playRound(playerSelection, computerSelection) {
    let playerChoice = undefined;
    let computerChoice;

    if (playerSelection === null || playerSelection === "") {
      return "Please enter a valid choice";
    } 
    else {
      playerChoice = playerSelection.toUpperCase();
      console.log("Player's Choice: " + playerChoice);
      alert("Player's Choice: " + playerChoice);

      computerChoice = computerSelection.toUpperCase();
      console.log("Computer's Choice: " + computerChoice);
      alert("Computer's Choice: " + computerChoice);
    }
    

    // Check to see correct input
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
      else if (playerChoice === "PAPER") {
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
      else if (playerChoice === "SCISSORS") {
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
    }
    else {
      return "Please enter a valid choice";
    }
  }

    while (gameRounds < 5) {
      alert(playRound(askUser(), getComputerChoice()));
      gameRounds += 1;
    }

    if (userScore > computerScore) {
      alert("You won the game! " + "Your Score: " + userScore + ", Computer's Score: " + computerScore);
    } else if (userScore < computerScore) {
      alert("You Lost the game! " + "Your Score: " + userScore + ", Computer's Score: " + computerScore);
    } else {
      alert("Seriously? A tie? How Disappointing " + "Your Score: " + userScore + ", Computer's Score: " + computerScore);
    }
}

game();