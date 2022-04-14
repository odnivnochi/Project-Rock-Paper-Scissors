const buttons = document.querySelectorAll('button')
const listOfChoice = ["Rock","Paper", "Scissors"]
function computerPlay(){
    
    return listOfChoice[Math.floor(Math.random() * 3)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
        setTimeout(function(){
            location.reload();
        }, 3000);
        
    })
}
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
let computerScore = 0
let playerScore = 0
function playRound(playerSelection) {

    let computerSelection = computerPlay()
    let roundResult = ""
    
        if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            roundResult = `You Win! ${playerSelection} beats ${computerSelection}`
            playerScore += 1
            
        }else if(playerSelection === computerSelection){
            roundResult = "It's draw"
            computerScore += 1
            playerScore += 1
            
        }else{
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`
            computerScore += 1
            
        }
        if(playerScore === 5 && computerScore === 5){
            disableButtons() 
            roundResult = "Draw!"
        }else if (playerScore === 5){
            disableButtons() 
            roundResult = "You Win!"
        }else if(computerScore === 5){
            disableButtons() 
            roundResult = "You Lose!"
        }  

    
    document.getElementById('result').innerHTML = roundResult
    document.getElementById('resultPlayer').innerHTML = playerScore
    document.getElementById('resultComputer').innerHTML = computerScore


  
    
}
