/*play rock paper scissors with the computer.
Prompt Rock, paper, scissors to player
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)*/
const choices = ["rock", "paper", "scissors"]
const winners = []

function game() {
    // for (let i = 1; i <= 5; i++) {
        playRound(); // put an in playRound to log rounds
    // }
    logWins()
}

function playRound (round) {
    const playerSelection = getPlayerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    logRound(round, playerSelection, computerSelection, winner)
}

function getPlayerChoice () {
    let input = prompt("Rock, Paper, Scissors?");
    while (input == null) {
        input = prompt("Rock, Paper, Scissors?");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock, Paper, or Scissors again. Spelling matters");
    while (input == null) {
        input = prompt("Rock, Paper, Scissors?");
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}



//computer randomly returns rock, paper, or scissors.
function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

//write a function that declares a winner between the the player and the computer.
function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Draw!';
    } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "scissors" && choiceC === "paper") ||
    (choiceP === "paper" && choiceC === "rock") 
    ){
        return "Player Wins"
    } else {
        return "Computer Wins"
    }
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false
    }
}

function logWins() {
    console.log(winners)
}

function logRound(round, playerSelection, computerSelection, winner) {
    console.log('Round:', round);
    console.log('Player Chose:', playerSelection);
    console.log('Computer Chose:', computerSelection);
    console.log('Results:', winner)
}

const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBn");
const scissors = document.getElementById("scissorsBtn");
rock.addEventListener('click', clickPlayerChoice)

function clickPlayerChoice() {
    if (clickPlayerChoice === rock) {
        let getPlayerChoice = 'rock'
    }
}
console.log(clickPlayerChoice)
game()


/*Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user*/ 