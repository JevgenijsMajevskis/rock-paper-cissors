console.log('Hello');

const choices = ['rock', 'paper', 'scissors'];

// computer selection

function getComputerChoice(){
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  return computerInput;
}

// declare a winner

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

// 1 round game

function playRound(playerSelection, computerSelection){
  const result = declareWinner(playerSelection, computerSelection);
  if(result == "Tie"){
    return "It's a Tie!";
  } else if(result == "Player won"){
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else{
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// 5 rounds game

