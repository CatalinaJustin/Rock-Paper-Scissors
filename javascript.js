/*play rock paper scissors with the computer.
Prompt Rock, paper, scissors to player
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)*/
const choices = ["rock", "paper", "scissors"]


function game() {
    playRound();
}

function playRound () {
    getPlayerChoice = playerSelection;
    computerChoice = computerSelection;
}

function getPlayerChoice () {
    let input = prompt("Rock, Paper, Scissors?");
    input = input.toLowerCase;
}



//computer randomly returns rock, paper, or scissors.
function computerSelection() {
    return choices[Math.floor(Math.random()*choices.length)]
}
console.log(computerSelection())
//write a function that declares a winner between the the player and the computer.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Draw!';
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player Wins"
    } else {
        return "Computer Wins"
    }
}



console.log(game())


/*Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user*/ 