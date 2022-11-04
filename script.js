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

// 1 round game

const playRound = function(){
  if (playerInput === 'Rock' && computerInput === 'Paper'){
    console.log('Paper beats Rock. You lose!');
  } else if (playerInput === 'Rock' && computerInput === 'Scissors'){
    console.log('Rock beats Scissors. You win!');  
  } else if (playerInput === 'Paper' && computerInput === 'Rock'){
    console.log('Paper beats Rock. You win!');
  } else if (playerInput === 'Paper' && computerInput === 'Scissors'){
    console.log('Scissors beats Paper. You lose!'); 
  } else if (playerInput === 'Scissors' && computerInput === 'Rock'){
    console.log('Rock beats Scissors. You lose!');
  } else if (playerInput === 'Scissors' && computerInput === 'Paper'){
    console.log('Scissors beats Paper. You win!');
  } else {
    console.log('You tie!');
  }
};

playRound();

// 5 rounds game



// Make your function’s playerSelection parameter case-insensitive