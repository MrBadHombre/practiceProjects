// function playerChoice(playerSelection) {
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const reset = document.querySelector('#reset-button');

function resetGame() {
  playScore = 0;
  compScore = 0;
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  console.log('reset');
}
// let computerSelection = Math.floor(Math.random() * 3);
function playGame() {
  if (compScore === 5 || playScore === 5) {
    resetGame();
    console.log('init');
  } else if (
    (playerSelection === 1 && computerSelection === 2) ||
    (playerSelection === 2 && computerSelection === 3) ||
    (playerSelection === 3 && computerSelection === 1)
  ) {
    console.log('you lose');
    compScore++;
    computerScore.innerHTML = compScore;
  } else if (playerSelection === computerSelection) {
    console.log('draw');
  } else {
    playScore++;
    playerScore.innerHTML = playScore;
    console.log('you win!');
  }
}

rock.addEventListener('click', function () {
  playerSelection = 1;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  playGame();
});
paper.addEventListener('click', function () {
  playerSelection = 2;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  playGame();
});
scissors.addEventListener('click', function () {
  playerSelection = 3;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  playGame();
});

reset.addEventListener('click', resetGame);

resetGame();
//   paper.addEventListener('click', function () {
//     playerSelection = 2;
//     return playerSelection;
//   });
//   scissors.addEventListener('click', function () {
//     playerSelection = 3;
//     return playerSelection;
//   });
//   if (
//     (playerSelection === 1 && computerSelection === 2) ||
//     (playerSelection === 2 && computerSelection === 3) ||
//     (playerSelection === 3 && computerSelection === 1)
//   ) {
//     computerScore++;
//     console.log('you lose');
//   } else if (playerSelection === computerSelection) {
//     // draw alert
//   } else {
//     playerScore++;
//   }
//   console.log(playerSelection);
// }

// computer selection

// compare to determine playGame

// add score to total

// socre > 5 play again

// score = 5 determine playGame

// ask to play again
