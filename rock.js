let computerScore = 0;
let playerScore = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    return x;
}

function playerSelection(){
    let selection = prompt("choose:");
    return selection;
}

function play(comp,player){

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
        result.textContent = "draw";
    }
    else if (y > comp && Math.abs(y-comp) < 2){
        result.textContent = "win";
        playerScore++; 
        playerscore.textContent = playerScore; 
     }
    else if (comp > y && Math.abs(comp-y) < 2){
        result.textContent = "lose";
        computerScore++;
        compscore.textContent = computerScore;
    }
}
// function game(){
//     let result = 0, p = 0, c = 0;
//     for(i = 0; i < 5; i++){
//         comp = getComputerChoice();
//         player = playerSelection();
//         result = play(comp, player);
//         if(result == 2){
//             p++;
//         }else if(result == -2){
//             c++;
//         }
//         console.log(`palyer : ${p}, comp : ${c}`);  
//     }
//     if(p > c){
//         console.log("CONgrats! Yoiu win!");
//     }else if (p == c){
//         console.log("It's a draw...");
//     }else{
//         console.log("OOps! Computer wins");
//     }
// }


