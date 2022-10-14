// function playerChoice(playerSelection) {
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
// let computerSelection = Math.floor(Math.random() * 3);
function winner(playerScore, computerScore) {
  computerScore = 0;
  playerScore = 0;

  if (
    (playerSelection === 1 && computerSelection === 2) ||
    (playerSelection === 2 && computerSelection === 3) ||
    (playerSelection === 3 && computerSelection === 1)
  ) {
    console.log(playerSelection);
    console.log(computerSelection);
  } else if (playerSelection === computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
  } else {
    console.log(playerSelection);
    console.log(computerSelection);
  }
}
rock.addEventListener('click', function () {
  playerSelection = 1;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  winner();
});
paper.addEventListener('click', function () {
  playerSelection = 2;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  winner();
});
scissors.addEventListener('click', function () {
  playerSelection = 3;
  computerSelection = Math.floor(Math.random() * 3) + 1;
  winner();
});

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

// compare to determine winner

// add score to total

// socre > 5 play again

// score = 5 determine winner

// ask to play again
