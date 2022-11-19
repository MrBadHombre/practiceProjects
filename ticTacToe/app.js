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
const gameSpaces = document.querySelectorAll('.spaces');

for (let i = 0; i < gameSpaces.length; i++) {
  spacesArray.push([i]);
}

console.log(gameSpaces);

gameSpaces.addEventListener('click', function color(event) {
  gameSpaces.style.backgroundColor = 'red';
});

function playerCreation() {
  if (!player) {
    player = {
      playerSymbol: 'x',
      playerName: 'Player1',
    };
  } else {
    player = {
      playerSymbol: 'o',
      playerName: 'Player 2',
    };
  }
}

playerCreation();
