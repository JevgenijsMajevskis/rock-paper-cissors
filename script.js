// COMPLETE GAME IN UI

const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("player");
const computerChoiceDisplay = document.getElementById("computer");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
  let playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  getComputerChoice();
}))

function getComputerChoice(){
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = computerChoice;
}