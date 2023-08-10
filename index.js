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

console.log(getComputerChoice());

