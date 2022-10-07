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

