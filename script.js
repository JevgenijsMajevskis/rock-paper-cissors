console.log('Hello');

const choices = ['rock', 'paper', 'scissors'];

// computer selection

function getComputerChoice(){
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  return computerInput;
}

// player selection

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const playerInput = prompt("Rock, Paper or Scissors? Make your choice!");
    if(playerInput == null){
      continue;
    }
    const playerInputInLowerCase = playerInput.toLowerCase();
    if(choices.includes(playerInputInLowerCase)){
      validatedInput = true;
      return playerInputInLowerCase;
    }
  }
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

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// 5 rounds game

function game(){  
  for (let i = 0; i < 5; i++){
    // const playerSelection = "rock";
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();