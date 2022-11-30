//test2
//test
// create grid -----
// style grid and page -----
// store each grid item in an array -----
// creat click event that changes color of grid square on click
// add X or O to grid squares after clicking
// make function to create players
// create game function
// refactor code

let player;
let spacesArray = [];
let activePlayer = 'player1';
let player1Score = [];
let player2Score = [];
const gameSpaces = document.querySelectorAll('.spaces');
const gameBoard = document.querySelector('.gameboard');
const startButton = document.querySelector('#playGame');
const playerChoicesGood = document.querySelectorAll('.playerChoicesGood');
const playerSelectionScreenOne = document.querySelector(
  '.playerSelectionScreenOne'
);

// start screen

startButton.addEventListener('click', () => {
  startButton.classList.add('hidden');
  playerSelectionScreenOne.classList.remove('hidden');
  // gameboard needs to remove hidden. hidden to create player selection page
  // gameBoard.classList.remove('hidden');
});

// player 1 character selection screen

goodGuysArray = Array.from(playerChoicesGood);
for (let i = 0; i < goodGuysArray.length; i++)
  goodGuysArray[i].addEventListener('click', () => {
    let player1 = goodGuysArray[i];
    console.log(player1);
    playerSelectionScreenOne.classList.add('hidden');
  });

// gameboard creation
spacesArray = Array.from(gameSpaces);
console.log(spacesArray);

for (let i = 0; i < spacesArray.length; i++) {
  spacesArray[i].textContent = '';
  spacesArray[i].addEventListener('click', function playerChoice(event) {
    if (activePlayer == 'player1' && spacesArray[i].textContent == '') {
      spacesArray[i].textContent = 'x';
      player1Score.push(spacesArray.indexOf(spacesArray[i]));
      console.log(player1Score);
      activePlayer = 'player2';
    } else if (activePlayer == 'player2' && spacesArray[i].textContent == '') {
      spacesArray[i].textContent = 'o';
      activePlayer = 'player1';
    } else {
      activePlayer = activePlayer;
    }
  });
}
