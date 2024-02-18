// Genera un numero random para la opción de la PC
function getComputerChoice(){
    var computerChoice = Math.floor(Math.random()*3)+1;
    if(computerChoice == 1){
        return 'PIEDRA'
    }else if(computerChoice == 2){
        return 'PAPEL'
    }else { return 'TIJERA'}
}

// Compara las opciones para definir el ganador
function playRound(playerSelection, computerChoice){
    
    if(playerSelection === computerChoice){
        alert('Empate - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
    } else if(playerSelection === 'PIEDRA' && computerChoice === 'PAPEL'){
        alert('Perdiste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        computerScore++; 
    } else if(playerSelection === 'PAPEL' && computerChoice === 'TIJERA'){
        alert('Perdiste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        computerScore++;
    } else if(playerSelection === 'TIJERA' && computerChoice === 'PIEDRA'){
        alert('Perdiste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        computerScore++;
    } else if(playerSelection === 'PIEDRA' && computerChoice === 'TIJERA'){
        alert('Ganaste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        playerScore++;
    } else if(playerSelection === 'PAPEL' && computerChoice === 'PIEDRA'){
        alert('Ganaste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        playerScore++;
    } else {
        alert('Ganaste - '+ 'PC: '+computerChoice + ' TU: '+playerSelection)
        playerScore++;
    }
}
// Solicita ingresar la opción de jugador y repite 5 veces el PlayRound 
function playGame(){
    for (let i = 0; i <= 4; i ++){
        let playerSelection = prompt('Por favor ingrese piedra papel o tijera:').toUpperCase();
        computerChoice = getComputerChoice()
        playRound(playerSelection, computerChoice) 
    }
}
// compara los resultados de cada jugador e informa al ganador
function finalResult(){
    if(playerScore > computerScore){
        alert ('Fuiste el mejor de las 5 rondas')
    } else if (computerScore > playerScore){
        alert ('La computadora te ha ganado')
    }else {alert ('Fue un justo empate')}
}
// Reset de los scores
function resetResults(playerScore, computerScore) {
    playerScore = 0
    computerScore = 0
}

let playerScore = 0
let computerScore = 0

playGame()
finalResult()
resetResults(playerScore, computerScore)