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
  let gameRounds = 1;

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
          return "Round " + gameRounds + ": " + " Tie! You must try again" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else if (computerChoice === "PAPER") {
          computerScore += 1;
          return "Round " + gameRounds + ": " + "You Lost! Paper beats Rock!" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else {
          userScore += 1;
          return "Round " + gameRounds + ": " + "Congratulations! Rock destroys Scissors!" + ", You: " + userScore + " - " + computerScore + " Computer";
        }
      }

      //Player Choice : Paper
      else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") {
          userScore += 1;
          return "Round " + gameRounds + ": " + "Congratulations! Paper smothered Rock to death" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else if (computerChoice === "PAPER") {
          return "Round " + gameRounds + ": " + "Tie! You must try again" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else {
          computerScore += 1;
          return "Round " + gameRounds + ": " + "You Lost! Scissors cut up Paper" + ", You: " + userScore + " - " + computerScore + " Computer";
        }
      }

      //Player Choice : Scissors
      else if (playerChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
          computerScore += 1;
          return "Round " + gameRounds + ": " + "You Lost! Rock destroys Scissors" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else if (computerChoice === "PAPER") {
          userScore += 1;
          return "Round " + gameRounds + ": " + "Congratulations! Scissors cut up Paper" + ", You: " + userScore + " - " + computerScore + " Computer";
        } 
        else {
          return "Round " + gameRounds + ": " + "Tie! You must try again" + ", You: " + userScore + " - " + computerScore + " Computer";
        }
      }
    }
    else {
      return "Please enter a valid choice";
    }
  }

    while (gameRounds <= 5) {
      alert(playRound(askUser(), getComputerChoice()));
      gameRounds += 1;
    }

    if (userScore > computerScore) {
      alert("You won the game! " + "You: " + userScore + " - " + computerScore + " Computer");
    } else if (userScore < computerScore) {
      alert("You Lost the game! " + "You: " + userScore + " - " + computerScore + " Computer");
    } else {
      alert("Seriously? A tie? How Disappointing " + "You: " + userScore + " - " + computerScore + " Computer");
    }
}

game();