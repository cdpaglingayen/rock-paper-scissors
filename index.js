console.log('Hello World from External File')

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1
  if (randomNumber === 1) {
    randomNumber = 'Rock'
    console.log('Rock')
  } else if (randomNumber === 2) {
    randomNumber = 'Paper'
    console.log('Paper')
  } else if (randomNumber === 3) {
    randomNumber = 'Scissors'
    console.log('Scissors')
  } else {
    randomNumber = 'Error'
    console.log('Error, Try again later')
  }
  return randomNumber
}

// For later revision
function getPlayerChoice() {
  // should be case-insensitive
  // rock, ROCK, RocK
  // Copying the Computer Choice Code For Testing
  let randomNumber = Math.floor(Math.random() * 3) + 1
  if (randomNumber === 1) {
    randomNumber = 'Rock'
    console.log('Rock')
  } else if (randomNumber === 2) {
    randomNumber = 'Paper'
    console.log('Paper')
  } else if (randomNumber === 3) {
    randomNumber = 'Scissors'
    console.log('Scissors')
  } else {
    randomNumber = 'Error'
    console.log('Error, Try again later')
  }
  return randomNumber
}

// Placeholder and Testers
const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('Tie, no winner for this')
  } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
    console.log('You Win, Rock beats scissors')
  } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
    console.log('You Win, Paper beats Rock')
  } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
    console.log('You Win, Scissors beats Paper')
  } else {
    console.log('Computer Wins')
  }
}

playRound(playerSelection, computerSelection)
