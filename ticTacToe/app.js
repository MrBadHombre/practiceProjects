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
let player1;
let player2 = document.createElement('div');
player2.innerHTML = `demogorgan.jpeg`;
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

// const playerChoicesBad = document.querySelectorAll('.playerChoicesBad');
// const playerSelectionScreentwo = document.querySelector(
//   '.playerSelectionScreenTwo'
// );
const playerOneScoreDisplay = document.querySelector('.playerOneScore');
const playerTwoScoreDisplay = document.querySelector('.playerTwoScore');
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
    player1 = goodGuysArray[i];
    console.log(player1);

    playerSelectionScreenOne.classList.add('hidden');

    gameBoard.classList.remove('hidden');

    playerOneScoreDisplay.classList.remove('hidden');
    playerTwoScoreDisplay.classList.remove('hidden');
    player2.innerHTML = `<img src='demogorgan.jpeg' alt "demogorgan"/>`;
    return player1, player2;
  });
// player 2 character selection screen

// badGuysArray = Array.from(playerChoicesBad);
// for (let i = 0; i < badGuysArray.length; i++)
//   badGuysArray[i].addEventListener('click', () => {
//     let player2 = badGuysArray[i];
//     console.log(player2);
//     gameBoard.classList.remove('hidden');
//     playerSelectionScreentwo.classList.add('hidden');
//     playerOneScoreDisplay.classList.remove('hidden');
//     playerTwoScoreDisplay.classList.remove('hidden');
//   });

// gameboard creation
spacesArray = Array.from(gameSpaces);
console.log(spacesArray);
let player1Array = [];
for (let i = 0; i < spacesArray.length; i++) {
  spacesArray[i].addEventListener('click', function playerChoice(event) {
    if (activePlayer == 'player1' && spacesArray[i].innerHTML == '') {
      spacesArray[i].innerHTML = player1.innerHTML;
      player1Array.push(spacesArray[i]);
      console.log(player1Array);
      if (playerWins()) {
        console.log('player1wins');
      } else {
        activePlayer = 'player2';
      }
    } else if (activePlayer == 'player2' && spacesArray[i].innerHTML == '') {
      spacesArray[i].innerHTML = player2.innerHTML;
      activePlayer = 'player1';
    } else {
      activePlayer = activePlayer;
    }
  });
}
console.log(player2, player1);

function playerWins() {
  if (
    spacesArray[0].innerHTML == player1.innerHTML &&
    spacesArray[1].innerHTML == player1.innerHTML &&
    spacesArray[2].innerHTML == player1.innerHTML
  ) {
    console.log('player1wins');
  }
}
