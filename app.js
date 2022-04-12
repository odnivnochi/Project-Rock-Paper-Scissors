const listOfChoice = ["rock","paper", "scissors"]

function computerPlay(){
    return listOfChoice[Math.floor(Math.random() * 3)]
}


function playRound() {
    let playerSelection = (prompt("Choice, Rock, Paper or Scissors: ").toLowerCase())
    let computerSelection = computerPlay()
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === computerSelection){
        return "It's draw"
    }else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}    

function game(){
    let computerScore = 0
    let playerScore = 0

    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection)
        console.log(result)
        
        if (result.startsWith("It's draw") === true){
            computerScore += 1
            playerScore += 1
        }else if (result.startsWith("You Win!") === true){
            playerScore += 1
        }else{
            computerScore += 1
        }
    
    }
    let whoWin = (computerScore > playerScore) ?  "You Lose!": "You Win!"
    return whoWin
}

console.log(game())