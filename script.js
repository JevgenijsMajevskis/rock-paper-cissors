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
  if(playerInput === 'Rock' || playerInput === 'Paper' || playerInput === 'Scissors'){
    console.log('You have chosen ' + `${playerInput}`);    
  } else {
    console.log('You have not made a choice! Try again?');
  }



// const playRound = function(playerSelection, computerSelection){

// }