console.log('Hello');

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
  const computerInput = choices[Math.floor(Math.random() * choices.length)];
  return computerInput;
}

getComputerChoice();