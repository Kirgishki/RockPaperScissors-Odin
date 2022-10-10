function randomNum(first, last){
    return Math.floor(Math.random() * (last - first + 1)) + first;
}

function getComputerChoice(){
    var rps = ["Rock", "Paper", "Scissors"];
    return rps[randomNum(0, 2)];
}

function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors ?").toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice[0].toUpperCase() + choice.slice(1);
    }else{
        getPlayerChoice();
    }
}

document.querySelectorAll("button").forEach(btn => btn.addEventListener('click', function () {
    roundOfGame(this.innerText, getComputerChoice());
    if(timesPlayerWon == 5){
        res.innerText = `YOU ARE WINNER
                        SCORE: ${timesPlayerWon} - ${timesComputerWon}`;
        timesPlayerWon = 0;
        timesComputerWon = 0;
    }else if(timesComputerWon == 5){
        res.innerText = `YOU ARE LOOSER
                        SCORE: ${timesPlayerWon} - ${timesComputerWon}`;
        timesPlayerWon = 0;
        timesComputerWon = 0;
    }
}));
const res = document.querySelector("#result");
var timesPlayerWon = 0;
var timesComputerWon = 0;
function roundOfGame(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        res.innerText = `2 ${playerSelection}s : DRAW!`;
        return 0;
    }else if(playerSelection === "Rock" && computerSelection === "Scissors" 
        || playerSelection == "Scissors" && computerSelection == "Paper" 
        || playerSelection === "Paper" && computerSelection === "Rock")
    {
        res.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        return ++timesPlayerWon;
    }else{
        res.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return ++timesComputerWon;
    }

}

// function game() { 
//     let i = 0;
//     let wins = 0;
//     while(i < 5){
//         wins += roundOfGame(getPlayerChoice(),getComputerChoice());
//         i++;
//     }
//     if(wins == 0){
//         alert("DRAW!");
//     }else if(wins < 0){
//         alert("LOOSE");
//     }else{
//         alert("WIN");
//     }
// }
// game();

