// COMPLETE UI GAME

const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let computerChoice;
let result;

// get and display player choice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  getComputerChoice();
  getResult();
}));

// get and display computer choice

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}

// get and display result

function getResult() {
  if(playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice == 'rock' && computerChoice == 'scissors') ||
    (playerChoice == 'scissors' && computerChoice == 'paper') ||
    (playerChoice == 'paper' && computerChoice == 'rock')
  ) {
    result = `You won, ${playerChoice} beats ${computerChoice}!`;
  } else {
    result = `Computer won, ${computerChoice} beats ${playerChoice}...`;
  }
  resultDisplay.innerHTML = result;
}

// 5 rounds game

