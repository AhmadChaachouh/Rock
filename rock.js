const container = document.querySelector('.contaier');

const buttons = document.createElement('div');
buttons.classList.add('buttons');

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = "Rock";
buttons.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = "Paper";
buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = "Scisssors";
buttons.appendChild(scissors);

container.appendChild(buttons);

const Buttons = document.querySelectorAll('button');

rock.addEventListener('click', function(e){play(getComputerChoice(), e.target.textContent);})
paper.addEventListener('click', function(e){play(getComputerChoice(), e.target.textContent);})
scissors.addEventListener('click', function(e){play(getComputerChoice(), e.target.textContent);})

const result = document.createElement('div');
container.appendChild(result);

const scores = document.createElement('div');
container.appendChild(scores);

const fin = document.createElement('div');
container.appendChild(fin);



let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return x;
}

function play(comp, player){

     if (playerScore == 5 || computerScore == 5) {
        fin.textContent = `final score : player : ${playerScore}, computer : ${computerScore}.`
        return;
    }
    
    let select = player;
    let y = 0;
    if (select.toUpperCase() == "ROCK"){
        y = 0;
    }else if(select.toUpperCase() == "PAPER"){
        y = 1;
    }
    else if(select.toUpperCase() == "SCISSORS"){
        y = 2;
    }

    if (y == comp){
        result.textContent = `You chose ${player}, computer chose ${comp}, it's a draw!`;
        scores.textContent = `Player ${playerScore}, Computer : ${computerScore} .`;    
    }   
    else if (y > comp && Math.abs(y-comp) < 2){
        result.textContent = `You chose ${player}, computer chose ${comp}, You win!`;
        playerScore++; 
        scores.textContent = `Player ${playerScore}, Computer : ${computerScore} .`;
     }
    else if (comp > y && Math.abs(comp-y) < 2){
        result.textContent = `You chose ${player}, computer chose ${comp}, You lose!`;
        computerScore++;
        scores.textContent = `Player ${playerScore}, Computer : ${computerScore} .`;
    }

}