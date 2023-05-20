/*play rock paper scissors with the computer.
Prompt Rock, paper, scissors to player
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)*/
const choices = ["rock", "paper", "scissors"]

const getPlayerChoice = prompt("Rock, Paper, Scissors?").toLowerCase;
function playerSelection () {
    let value = (Rock || Paper || Scissors).toLowerCase
}

//computer randomly returns rock, paper, or scissors.
function computerSelection() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1 :
            computerSelection = "ROCK";
            break;
        case 2 :
            computerSelection = "PAPER";
            break
        case 3 :
            computerSelection = "SCISSORS";
            break
    }
}
//write a function that declares a winner between the the player and the computer.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw!';
    } else if (computerSelection == "ROCK") {
        return (playerSelection == "Paper") ? "You win! Paper beats rock" : "You lose! Rock beats scissors"
    } else if (computerSelection == "PAPER") {
        return (playerSelection == "Scissors") ? "You win! Scissors beats Paper" : "You lose! Paper beats Rock"
    } else if (computerSelection == "SCISSORS") {
        return (playerSelection == "Rock") ? "You win! Rock beats Scissors" : "You lose! Scissors beats Paper"
    }
}

console.log(playRound(playerSelection, computerSelection))




/*Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user*/ 