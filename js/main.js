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

function roundOfGame(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        alert("Draw! 2 " + playerSelection + "s");
        return 0;
    }else if(playerSelection === "Rock" && computerSelection === "Scissors" 
        || playerSelection == "Scissors" && computerSelection == "Paper" 
        || playerSelection === "Paper" && computerSelection === "Rock")
    {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }else{
        alert(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}

function game() { 
    let i = 0;
    let wins = 0;
    while(i < 5){
        wins += roundOfGame(getPlayerChoice(),getComputerChoice());
        i++;
    }
    if(wins == 0){
        alert("DRAW!");
    }else if(wins < 0){
        alert("LOOSE");
    }else{
        alert("WIN");
    }
}
game();

