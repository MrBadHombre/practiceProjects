// function playerChoice(playerSelection) {
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
// let computerSelection = Math.floor(Math.random() * 3);
function winner() {
  let computerScore = 0;
  let playerScore = 0;
  let playerSelection = 1;
  let computerSelection = Math.floor(Math.random() * 3);
  if (
    (playerSelection === 1 && computerSelection === 2) ||
    (playerSelection === 2 && computerSelection === 3) ||
    (playerSelection === 3 && computerSelection === 1)
  ) {
    computerScore++;
    console.log('you lose');
  } else if (playerSelection === computerSelection) {
    // draw alert
  } else {
    playerScore++;
    console.log('you win');
  }
}

rock.addEventListener('click', function () {
  let computerScore = 0;
  let playerScore = 0;
  let playerSelection = 1;
  let computerSelection = Math.floor(Math.random() * 3) + 1;
  if (
    (playerSelection === 1 && computerSelection === 2) ||
    (playerSelection === 2 && computerSelection === 3) ||
    (playerSelection === 3 && computerSelection === 1)
  ) {
    computerScore++;
    console.log('you lose');
    console.log(playerSelection);
  } else if (playerSelection === computerSelection) {
    console.log(playerSelection);
    // draw alert
  } else {
    playerScore++;
    console.log('you win');

    console.log(playerSelection);
  }
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
