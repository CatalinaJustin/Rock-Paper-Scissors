/*play rock paper scissors with the computer.
Prompt Rock, paper, scissors to player
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)*/
const choices = ["rock", "paper", "scissors"]
const winners = []
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");


function game() {
    // for (let i = 1; i <= 5; i++) {
        playRound(); // put an i in playRound to log rounds
    // }
    logWins()
}
rock.addEventListener('click', function() {
    playRound('rock', computerChoice());
})

paper.addEventListener('click', function() {
    playRound('paper', computerChoice())
})

scissors.addEventListener('click', function() {
    playRound('scissors', computerChoice())
})

function playRound (playerSelection, computerSelection) {
    
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner)
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
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let draws = winners.filter((item) => item == "Draw!").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins)
    console.log("Computer Wins:", computerWins);
    console.log("Draws:", draws)
    console.log(winners)
}

function logRound(playerSelection, computerSelection, winner) {
    // console.log('Round:', round);
    console.log('Player Chose:', playerSelection);
    console.log('Computer Chose:', computerSelection);
    console.log('Results:', winner)
}





game()


/*Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user*/ 