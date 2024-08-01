const rotag = document.getElementById("rotag");
const paptag = document.getElementById("paptag");
const scitag = document.getElementById("scitag");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerscore = document.getElementById("playerscore");
const compscore = document.getElementById("compscore");
const result = document.getElementById("result");
const comppick = document.getElementById("comppick");
const playerpick = document.getElementById("playerpick");
const reset = document.getElementById('reset');
const computeropt = ['Rock', 'Paper', 'Scissors'];
let userscore = 0;
let npcscore = 0;

rock.addEventListener("mouseover", event => {
    rotag.style.visibility = "visible";
});
rock.addEventListener("mouseout", event => {
    rotag.style.visibility = "hidden";
});
paper.addEventListener("mouseover", event => {
    paptag.style.visibility = "visible";
});
paper.addEventListener("mouseout", event => {
    paptag.style.visibility = "hidden";
});
scissors.addEventListener("mouseover", event => {
    scitag.style.visibility = "visible";
});
scissors.addEventListener("mouseout", event => {
    scitag.style.visibility = "hidden";
});

function play(p){
    let comp = computeropt[Math.floor(Math.random() * 3)]
    result.classList.remove("redText", "greenText");
    playerpick.textContent = `You selected: ${p}`;
    comppick.textContent = `The computer selected: ${comp}`;
    if(comp == p){
        result.textContent = "IT'S A TIE"
        return;
    }
    switch(p){
        case 'Rock':{
            result.textContent = comp === "Paper" ? "YOU LOSE!" : "YOU WIN!";
            break;
        }
        case 'Paper':{
            result.textContent = comp === "Scissors" ? "YOU LOSE!" : "YOU WIN!";
            break;
        }
        case 'Scissors':{
            result.textContent = comp === "Rock" ? "YOU LOSE!" : "YOU WIN!";
        }

    }

    switch(result.textContent){
        case "YOU WIN!":
            userscore++;
            playerscore.textContent = userscore
            result.classList.add("greenText");
            break;
        case "YOU LOSE!":
            npcscore++;
            compscore.textContent = npcscore;
            result.classList.add("redText");
            break;
    }
}
reset.addEventListener("click", event =>{
    window.location.reload();
})

