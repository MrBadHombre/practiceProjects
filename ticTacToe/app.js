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

// spacesArray = Array.from(gameSpaces);
// console.log(spacesArray);
for (let i = 0; i < gameSpaces.length; i++) {
  spacesArray.push(gameSpaces[i]);
}
console.log(spacesArray);

for (let i = 0; i < spacesArray.length; i++) {
  spacesArray[i].textContent = 'null';
  spacesArray[i].addEventListener('click', function playerChoice(event) {
    if (activePlayer == 'player1' && spacesArray[i].textContent == 'null') {
      spacesArray[i].textContent = 'x';
      player1Score.push(spacesArray[i]);
      console.log(player1Score);
      activePlayer = 'player2';
    } else if (
      activePlayer == 'player2' &&
      spacesArray[i].textContent == 'null'
    ) {
      spacesArray[i].textContent = 'o';
      activePlayer = 'player1';
    } else {
      activePlayer = activePlayer;
    }
  });
}

function winner(player1Score) {
  console.log(player1Score);
  if (player1Score.includes(spacesArray[(0, 1, 2)])) {
    prompt('WINNER');
  }
}
// function playerCreation() {
//   if (!player) {
//     player = {
//       playerSymbol: 'x',
//       playerName: 'Player1',
//     };
//   } else {
//     player = {
//       playerSymbol: 'o',
//       playerName: 'Player 2',
//     };
//   }
// }

// playerCreation()
