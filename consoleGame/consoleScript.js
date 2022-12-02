// EVERYTHING ABOVE THIS MASSAGE IS THE SAME GAME, BUT IN CONSOLE

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
    // const playerInput = prompt("Rock, Paper or Scissors? Make your choice!");
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
    return "It's a tie!";
  } else if(result == "Player won"){
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else{
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// 5 rounds game

function game(){
  let scorePlayer = 0;
  let scoreComputer = 0; 
  for (let i = 0; i < 5; i++){    
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("-----------------------------------");
    if(declareWinner(playerSelection, computerSelection) == "Player won"){
      scorePlayer++;
    } else if(declareWinner(playerSelection, computerSelection) == "Computer won"){
      scoreComputer++;
    } 
  }
  console.log("Game Over!");
  if(scorePlayer > scoreComputer){
    console.log("Player is the winner!");
  } else if(scorePlayer < scoreComputer){
    console.log("Computer is the winner!");
  } else{
    console.log("It's an absolute TIE!");
  }
}

game();