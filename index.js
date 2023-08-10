// function to get user's choice of option
function getUserChoice() {
  const playerSelection = prompt("Please enter your choice of Rock, Paper or Scissors!");
  return playerSelection;
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

// Calculate Score
function getScore(userScore, computerScore) {
  return "You: " + userScore + " - " + computerScore + " Computer";
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

    while (gameRounds <= 5) {
      alert(playRound(getUserChoice(), getComputerChoice()));
      gameRounds += 1;
    }

    if (userScore > computerScore) {
      alert("You won the game! " + getScore(userScore, computerScore));
    } else if (userScore < computerScore) {
      alert("You Lost the game! " + getScore(userScore, computerScore));
    } else {
      alert("Seriously? A tie? How Disappointing " + getScore(userScore, computerScore));
    }
}

game();