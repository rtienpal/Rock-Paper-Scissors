let computerPlay = function()  {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    return (randomNumber <= 33 ? "SCISSORS" :
            randomNumber <= 67 ? "PAPER" : "ROCK")
}

let playerPlay = function() {
    let playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS");
    if (playerSelection.toUpperCase() === "ROCK" || playerSelection.toUpperCase() === "PAPER" || playerSelection.toUpperCase() === "SCISSORS") {
        return playerSelection;
    } else {
        console.log("Wrong value, please try again");
        playerPlay();
    }
}

playerPlay();

console.log(computerPlay());