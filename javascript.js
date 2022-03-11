let playerScore = 0;
let computerScore = 0;

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
    console.log('player selection = '+playerSelection+' computer selection = '+computerSelection);
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

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = playerPlay(i);
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log('End of 5 rounds! Player '+playerScore+' x '+computerScore+' Computer');
}

game();