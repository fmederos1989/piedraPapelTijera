
        var playerScore = 0
        var computerScore = 0
        
        const selectPiedra = document.querySelector('#piedra');
        const selectPapel = document.querySelector('#papel');
        const selectTijera = document.querySelector('#tijera');
        const resetGame = document.querySelector('#resetGame');
        const textoInformativo = document.createElement('p');
        const resultados = document.createElement('p');
        const informacion = document.querySelector('.informacion');
        
        selectPiedra.addEventListener('click', () => {
            playerSelection = 'PIEDRA';
            computerChoice = getComputerChoice();
            playRound(playerSelection, computerChoice);
            finalResult(playerScore, computerScore);
        })
        
        selectPapel.addEventListener('click', () => {
            playerSelection = 'PAPEL';
            computerChoice = getComputerChoice();
            playRound(playerSelection, computerChoice);
            finalResult(playerScore,computerScore);
        })
        
        selectTijera.addEventListener('click', () =>{
            playerSelection = 'TIJERA';
            computerChoice = getComputerChoice();
            playRound(playerSelection, computerChoice);
            finalResult(playerScore,computerScore);
        })
        
        
        resetGame.addEventListener('click', () => {
            playerScore = 0;
            computerScore = 0;
            console.log(computerScore, playerScore);
            textoInformativo.textContent = '';
            resultados.textContent = '';
            selectPiedra.disabled = false;
            selectPapel.disabled = false;
            selectTijera.disabled = false;
        })
        
        
        function finalResult(){
            if(playerScore === 5 || computerScore === 5){

                if(computerScore > playerScore){
                    textoInformativo.textContent = `LA CPU ha ganado 5 rondas antes que tu 😆`;
                    disabledButton();
                }else if(playerScore > computerScore){
                    textoInformativo.textContent = `Felicitaciones has ganado 5 rondas antes que la CPU 😎`;
                    disabledButton();
                }else{
                }
            }else;
            
        }

        function disabledButton (){
            selectPapel.disabled = true;
            selectPiedra.disabled = true;
            selectTijera.disabled = true;
        }        
        

        // Genera un numero random para la CPU
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
                textoInformativo.textContent = `La ronda fue un empate`
            } else if(playerSelection === 'PIEDRA' && computerChoice === 'PAPEL'){
                textoInformativo.textContent = `Perdiste, la CPU gano la ronda`
                computerScore++; 
            } else if(playerSelection === 'PAPEL' && computerChoice === 'TIJERA'){
                textoInformativo.textContent = `Perdiste, la CPU gano la ronda`
                computerScore++;
            } else if(playerSelection === 'TIJERA' && computerChoice === 'PIEDRA'){
                textoInformativo.textContent = `Perdiste, la CPU gano la ronda`
                computerScore++;
            } else if(playerSelection === 'PIEDRA' && computerChoice === 'TIJERA'){
                textoInformativo.textContent = `Has ganado la ronda!`
                playerScore++;
            } else if(playerSelection === 'PAPEL' && computerChoice === 'PIEDRA'){
                textoInformativo.textContent = `Has ganado la ronda!`
                playerScore++;
            } else {
                textoInformativo.textContent = `Has ganado la ronda!`
                playerScore++;
            }
        resultados.textContent = `CPU ${computerScore} // Player ${playerScore}`
        informacion.appendChild(textoInformativo);
        informacion.appendChild(resultados);
        }
