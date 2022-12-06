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
(function playGame() {
  const gameSpaces = document.querySelectorAll('.spaces');
  const gameBoard = document.querySelector('.gameboard');
  const startButton = document.querySelector('#playGame');
  const playerChoicesGood = document.querySelectorAll('.playerChoicesGood');
  const playerSelectionScreenOne = document.querySelector(
    '.playerSelectionScreenOne'
  );
  let player1ScoreDisplay = document.querySelector('.score1');
  let player2ScoreDisplay = document.querySelector('.score2');
  const playerOneScoreDisplay = document.querySelector('.playerOneScore');
  const playerTwoScoreDisplay = document.querySelector('.playerTwoScore');

  let player1;
  let spacesArray = [];
  let activePlayer = 'player1';
  let player1Score = [];
  let player2Score = [];
  let player1WinScore = 0;
  let player2WinScore = 0;
  let player2 = document.createElement('div');

  player2.innerHTML = `demogorgan.jpeg`;

  startButton.addEventListener('click', () => {
    startButton.classList.add('hidden');
    playerSelectionScreenOne.classList.remove('hidden');
  });

  goodGuysArray = Array.from(playerChoicesGood);

  for (let i = 0; i < goodGuysArray.length; i++)
    goodGuysArray[i].addEventListener('click', () => {
      player1 = goodGuysArray[i];

      playerSelectionScreenOne.classList.add('hidden');

      gameBoard.classList.remove('hidden');

      playerOneScoreDisplay.classList.remove('hidden');
      playerTwoScoreDisplay.classList.remove('hidden');
      player2.innerHTML = `<img src='demogorgan.jpeg' alt "demogorgan"/>`;
      return player1, player2;
    });

  spacesArray = Array.from(gameSpaces);
  console.log(spacesArray);
  let player1Array = [];
  let player2Array = [];
  for (let i = 0; i < spacesArray.length; i++) {
    spacesArray[i].addEventListener('click', function playerChoice(event) {
      if (activePlayer == 'player1' && spacesArray[i].innerHTML == '') {
        spacesArray[i].innerHTML = player1.innerHTML;
        player1Array.push(spacesArray[i]);
        if (playerWins(player1)) {
          alert('player 1 wins!!!');
          player1ScoreDisplay.textContent = player1WinScore += 1;

          resetGame();
        } else {
          activePlayer = 'player2';
        }
      } else if (activePlayer == 'player2' && spacesArray[i].innerHTML == '') {
        spacesArray[i].innerHTML = player2.innerHTML;
        player2Array.push(spacesArray[i]);
        if (playerWins(player2)) {
          alert('player 2 wins!!!');
          player2ScoreDisplay.textContent = player2WinScore += 1;

          resetGame();
        } else {
          activePlayer = 'player1';
        }
      } else {
        activePlayer = activePlayer;
      }
    });
  }

  function playerWins(player) {
    if (
      (spacesArray[0].innerHTML == player.innerHTML &&
        spacesArray[1].innerHTML == player.innerHTML &&
        spacesArray[2].innerHTML == player.innerHTML) ||
      (spacesArray[3].innerHTML == player.innerHTML &&
        spacesArray[4].innerHTML == player.innerHTML &&
        spacesArray[5].innerHTML == player.innerHTML) ||
      (spacesArray[6].innerHTML == player.innerHTML &&
        spacesArray[7].innerHTML == player.innerHTML &&
        spacesArray[8].innerHTML == player.innerHTML) ||
      (spacesArray[0].innerHTML == player.innerHTML &&
        spacesArray[3].innerHTML == player.innerHTML &&
        spacesArray[6].innerHTML == player.innerHTML) ||
      (spacesArray[1].innerHTML == player.innerHTML &&
        spacesArray[4].innerHTML == player.innerHTML &&
        spacesArray[7].innerHTML == player.innerHTML) ||
      (spacesArray[2].innerHTML == player.innerHTML &&
        spacesArray[5].innerHTML == player.innerHTML &&
        spacesArray[8].innerHTML == player.innerHTML) ||
      (spacesArray[0].innerHTML == player.innerHTML &&
        spacesArray[4].innerHTML == player.innerHTML &&
        spacesArray[8].innerHTML == player.innerHTML) ||
      (spacesArray[2].innerHTML == player.innerHTML &&
        spacesArray[4].innerHTML == player.innerHTML &&
        spacesArray[6].innerHTML == player.innerHTML)
    ) {
      return true;
    } else {
      return false;
    }
  }
  function resetGame() {
    for (let i = 0; i < spacesArray.length; i++) {
      spacesArray[i].innerHTML = '';
    }
  }
})();
