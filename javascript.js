let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);

let choices = document.querySelector("#choices");
let result = document.querySelector("#result");
let textup = document.querySelector("#textup");


let score = document.querySelector("#score");
score.textContent = "You "+playerScore+" X "+computerScore+" Bot";


function computerPlay()  {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    return (randomNumber <= 33 ? "SCISSORS" :
            randomNumber <= 67 ? "PAPER" : "ROCK")
}

function playerPlay(round) {
    let playerSelection = prompt("Round "+round+"\nPlayer "+playerScore+" - "+computerScore+" Computer\nChoose ROCK, PAPER, or SCISSORS");
    if (playerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "SCISSORS") {
        return playerSelection.toUpperCase();
    } else {
        console.log("Wrong value, please try again");
        return playerPlay(round);
    }
}


function win (playerSelection) {
    playerScore++;
    if (playerSelection === 'ROCK') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSelection === 'SCISSORS') {
        return 'You win! Scissors beats Paper!';
    } else {
        return 'You win! Paper beats Rock!';
    }
}

function lose (playerSelection) {
    computerScore++;
    if (playerSelection === 'SCISSORS') {
        return 'You lose! Rock beats Scissors!';
    } else if (playerSelection === 'PAPER') {
        return 'You lose! Scissors beats Paper!';
    } else {
        return 'You lose! Paper beats Rock!';
    }
}

function playRound(playerSelection, computerSelection) {
    choices.textContent = ('Your pick = '+playerSelection+' // Bot pick = '+computerSelection);
    if (playerSelection === computerSelection) {
        return 'Tie! Both are '+playerSelection;
    } else if (playerSelection === 'ROCK'){
        if (computerSelection === 'SCISSORS') {
            return win('ROCK');
        } else {
            return lose ('ROCK');
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            return win('SCISSORS');
        } else {
            return lose ('SCISSORS');
        }
    } else if (computerSelection === 'ROCK') {
        return win('PAPER');
    } else {
        return lose('PAPER');
    }
}


function game(e) {
    let playerSelection = e.target.id.toUpperCase();
    let computerSelection = computerPlay();
    result.textContent = playRound(playerSelection, computerSelection);
    score.textContent = "You "+playerScore+" X "+computerScore+" Bot";
    textup.textContent = "Round "+(playerScore + computerScore+1)+": Choose your option:";
    
    console.log('End of 5 rounds! Player '+playerScore+' x '+computerScore+' Computer');
}



