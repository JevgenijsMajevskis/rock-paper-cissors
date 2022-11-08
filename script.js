console.log('Hello');

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  return computerInput;
}

function declareWinner(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return "Tie";
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')
  ){
    return "Player won";
  } else{
    return "Computer won";
  }
}

getComputerChoice();