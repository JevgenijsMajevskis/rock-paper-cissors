// const shapes = ['Rock', 'Paper', 'Scissors'];

// const getComputerChoice = shapes[Math.floor(Math.random() * shapes.length)];
// console.log(getComputerChoice);

const getComputerChoice = function(resultComputer){
  const shapes = ['Rock', 'Paper', 'Scissors'];
  const computersChoice = shapes[Math.floor(Math.random() * shapes.length)];
  return computersChoice;
};

const computersChoice = getComputerChoice();
console.log(computersChoice);