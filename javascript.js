let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let playerOpt = document.querySelector("#player-opt");
let computerOpt = document.querySelector("#computer-opt");
let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let resetBtn = document.querySelector("#reset");
rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
resetBtn.addEventListener("click", reset);

/*
let score = document.querySelector("#score");
score.textContent = "You "+playerScore+" X "+computerScore+" Bot";
*/

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber <= 33
    ? "SCISSORS"
    : randomNumber <= 67
    ? "PAPER"
    : "ROCK";
}



function win(playerSelection) {
  playerScore++;
  if (playerSelection === "ROCK") {
    return "You win! Rock beats Scissors!";
  } else if (playerSelection === "SCISSORS") {
    return "You win! Scissors beats Paper!";
  } else {
    return "You win! Paper beats Rock!";
  }
}

function lose(playerSelection) {
  computerScore++;
  if (playerSelection === "SCISSORS") {
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection === "PAPER") {
    return "You lose! Scissors beats Paper!";
  } else {
    return "You lose! Paper beats Rock!";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie! Both are " + playerSelection;
  } else if (playerSelection === "ROCK") {
    if (computerSelection === "SCISSORS") {
      return win("ROCK");
    } else {
      return lose("ROCK");
    }
  } else if (playerSelection === "SCISSORS") {
    if (computerSelection === "PAPER") {
      return win("SCISSORS");
    } else {
      return lose("SCISSORS");
    }
  } else if (computerSelection === "ROCK") {
    return win("PAPER");
  } else {
    return lose("PAPER");
  }
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerOpt.textContent = "✊";
      break;
    case "PAPER":
      playerOpt.textContent = "✋";
      break;
    case "SCISSORS":
      playerOpt.textContent = "✌";
      break;
  }

  switch (computerSelection) {
    case "ROCK":
      computerOpt.textContent = "✊";
      break;
    case "PAPER":
      computerOpt.textContent = "✋";
      break;
    case "SCISSORS":
      computerOpt.textContent = "✌";
      break;
  }
}

function game(e) {
  let playerSelection = e.target.id.toUpperCase();
  let computerSelection = computerPlay();
  updateChoices(playerSelection, computerSelection);
  result.textContent = playRound(playerSelection, computerSelection);
  playerScoreDisplay.textContent = "Player: "+playerScore;
  computerScoreDisplay.textContent = "Bot: "+computerScore;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player: "+playerScore;
    computerScoreDisplay.textContent = "Bot: "+computerScore;
    computerOpt.textContent = "❔";
    playerOpt.textContent = "❔";
    result.textContent = "Choose your weapon, Good Luck!";
}