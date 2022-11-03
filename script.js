// const shapes = ['Rock', 'Paper', 'Scissors'];

// const getComputerChoice = shapes[Math.floor(Math.random() * shapes.length)];
// console.log(getComputerChoice);

const choices = ['Rock', 'Paper', 'Scissors'];

// computer selection

const getComputerChoice = function(computerResult){
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  return computerInput;
};

const computerInput = getComputerChoice();
console.log("Computer's choice is " + computerInput);

// player selection

const playerInput = prompt("Rock, Paper or Scissors? Make your choice!");

  if (playerInput === 'Rock' || playerInput === 'Paper' || playerInput === 'Scissors'){
    console.log('You have chosen ' + `${playerInput}`);    
  } else {
    console.log('You have not made a choice! Try again?');
  }

// declare a winner

const playRound = function(playerSelection, computerSelection){
  if (playerInput === 'Rock' && computerInput === 'Paper'){
    console.log('Paper bits rock. You lose!');
  } else if (playerInput === 'Rock' && computerInput === 'Scissors'){
    console.log('Rock bits scissors. You win!');
  } else if (playerInput === 'Rock' && computerInput === 'Rock'){
    console.log('You tie!');
  } else if (playerInput === 'Paper' && computerInput === 'Rock'){
    console.log('Paper bits rock. You win!');
  } else if (playerInput === 'Paper' && computerInput === 'Scissors'){
    console.log('Scissors bits paper. You lose!');
  } else if (playerInput === 'Paper' && computerInput === 'Paper'){
    console.log('You tie!');
  } else if (playerInput === 'Scissors' && computerInput === 'Rock'){
    console.log('Rock bits scissors. You lose!');
  } else if (playerInput === 'Scissors' && computerInput === 'Paper'){
    console.log('Scissors bits paper. You win!');
  } else {
    console.log('You tie!');
  }
};

playRound();

// Make your function’s playerSelection parameter case-insensitive