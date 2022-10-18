const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const reset = document.querySelector('#reset-button');
const playAgainWin = document.querySelector('.hidden-win');
const playAgainLose = document.querySelector('.hidden-lose');
const winReplayBtn = document.querySelector('.win-play-again');
const loseReplayBtn = document.querySelector('.lose-play-again');

const gameGraphics = document.querySelector('.choice-container');
function resetGame() {
  playAgainWin.style.display = 'none';
  playAgainLose.style.display = 'none';
  gameGraphics.style.display = 'flex';

  playScore = 0;
  compScore = 0;
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  console.log('reset');
}

function playGame() {
  if (playScore === 5) {
    playAgainWin.style.display = 'flex';
    gameGraphics.style.display = 'none';
  } else if (compScore === 5) {
    playAgainLose.style.display = 'flex';
    gameGraphics.style.display = 'none';
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
winReplayBtn.addEventListener('click', resetGame);
resetGame();
loseReplayBtn.addEventListener('click', resetGame);
resetGame();
