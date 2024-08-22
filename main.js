const uChoice = document.getElementById("selection1");
const cChoice = document.getElementById("selection2");
const result = document.getElementById("result");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
let uScore = 0;
let cScore = 0;
const choices = ["ROCK","PAPER","SCISSOR"];
const buttons = document.querySelectorAll("button");
document.body.addEventListener("click",function(event){
        if(event.target.id == "ROCK" || event.target.id == "PAPER" || event.target.id == "SCISSOR"){
                let userChoice = event.target.id;
                let computerChoice = choices[Math.floor(Math.random()*3)];
                if(userChoice==computerChoice){
                        result.style.color = "black";
                        result.textContent = "IT'S A TIE!😑";
                }
                else if((userChoice == "ROCK" && computerChoice == "SCISSOR") || (userChoice == "PAPER" && computerChoice == "ROCK") || (userChoice == "SCISSOR" && computerChoice == "PAPER")){
                        result.style.color = "lime";
                        result.textContent = "YOU WON!🤩";
                        uScore +=1;
                }
                else{
                        cScore+=1
                        result.style.color = "tomato";
                        result.textContent = "COMPUTER WON!🤭";
                }
                uChoice.textContent = `You :${userChoice}`;
                cChoice.textContent = `  Computer :${computerChoice}`;
                userScore.textContent = `Your Score:${uScore}`;
                computerScore.textContent = `Computer Score:${cScore}`;
        }
});

