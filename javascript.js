function getPlayerChoice () {
    let value = prompt("enter Rock/Paper/Scissors").toLowerCase
}
const playerSelection = prompt("Rock, Paper, Scissors?");
let computer;
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw!';
    } else if (computerSelection == "Rock") {
        return (playerSelection == "Paper") ? "You win! Paper beats rock" : "You lose! Rock beats scissors"
    } else if (computerSelection == "Paper") {
        return (playerSelection == "Scissors") ? "You win! Scissors beats Paper" : "You lose! Paper beats Rock"
    } else if (computerSelection == "Scissors") {
        return (playerSelection == "Rock") ? "You win! Rock beats Scissors" : "You lose! Scissors beats Paper"
    }
}

// function playRound(playerSelection, computerSelection) {
//     if ((playerSelection = 'Rock') && (computerSelection = 2)) {
//         return("You win! Rock beats Scissors");
//     } else if ((playerSelection = 'Scissors') && (computerSelection = 3)) {
//         return("You win! Scissors beats Paper");
//     } else if ((playerSelection = 'Paper') && (computerSelection = 1)) {
//         return("You win! Paper beats rock");
//     } else if ((playerSelection = 'Rock') && (computerSelection = 3)) {
//         return("You lose! Paper beats rock");
//     } else if ((playerSelection = 'Scissors') && (computerSelection = 1)) {
//         return("You lose! Rock beats Scissors");
//     } else if ((playerSelection = 'Paper') && (computerSelection = 2)) {
//         return("You lose! Scissors beats Paper");
//     } else {
//         return("You tied!")
//     }
// }




/*play rock paper scissors with the computer.
computer randomly returns rock, paper, or scissors.
write a function that declares a winner between the the player and the computer.
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)
Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user */