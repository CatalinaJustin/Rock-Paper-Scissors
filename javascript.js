/*play rock paper scissors with the computer.
Prompt Rock, paper, scissors to player
case sensitive so a person can input rock or any of the other two in any other variation. (name =name.toLowerCase)*/
const choices = ["rock", "paper", "scissors"]
const winners = []
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");


function game() {
    

        playRound(); // put an i in playRound to log rounds
    logWins();
}


function resetGame() {
    // reset game
}

function startGame() {
    //play the game until someone wins 5 times
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
    img.addEventListener(('click', () => {
        if(img.id) {
            playRound(img.id)
        }
    }))
    )
}

function playRound (playerSelection, computerSelection) {
    let wins = checkWins()
    if(wins >= 5) {
        return
    }
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner)
    logRound(playerSelection, computerSelection, winner)

    winners.push(winner)
    tallyWins()
    displayRound(playerSelection, computerSelection, winner)
}

function displayRound(playerSelection, computerSelection, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    document.querySelector('.computerChoice').textContent = `The Computer Chose: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    document.querySelector('.draws').textContent = `Draws: ${draws}`
}

function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const draws = winners.filter((item) => "Draw").length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.draws').textContent = `Score: ${draws}`;
}


//computer randomly returns rock, paper, or scissors.
function computerChoice() {
    //todo - update the dom with the computer selection
    return choices[Math.floor(Math.random()*choices.length)]
}

function checkWins(){
    const pWinCount = winners.filter((item) => item == "Player")
    const cWinCount = winners.filter((item) => item == "Computer")
    return Math.max(pWinCount,cWinCount) //mathMax takes in as many values as you want and it will return the highest number
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

function setWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const draws = winners.filter((item) => "Draw").length;
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





// game()


/*Rock beats scissors, scissors beats paper, paper beats scissors. Return the winner of the declaration with an explanation.
return the function call, not console.log them
write a new function called game(). use the previous function inside of the this one to paly a 5 round game that keeps score and reports a winner or loser at the end.
use prompt() to get input from user*/ 