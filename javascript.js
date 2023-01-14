
const computerChoice = document.getElementById("computer-Choice");
const userChoice = document.getElementById("user-Choice");
const resultGame = document.getElementById("result");
const player = document.getElementById("user-Choice");
const playerscore = document.querySelector(".playerscore");
const computerscore = document.querySelector(".computerscore");
let btn = document.querySelectorAll("button");
let again = document.querySelectorAll("button")
let playerchoi;
let computerchoi;
let draw;
let computer = document.getElementById("computer-Choice");

let ppoints = parseInt(playerscore.innerHTML);
let cpoints = parseInt(computerscore.innerHTML);


btn.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        if(e.target.id === "again"){
            computer.src = "images/rock.png";
            player.src = "images/rock.png";
            cpoints = 0;
            ppoints = 0;
        }else {
            computerChoice.classList.add("shakecomputer");
            userChoice.classList.add("shakeplayer");
            setTimeout(() => {

                computerChoice.classList.remove("shakecomputer");
                userChoice.classList.remove("shakeplayer");
                if (e.target.id === "rock") {
                    playerchoi = "rock";
                    player.src = "images/rock.png";
                } else if (e.target.id === "paper") {
                    playerchoi = "paper";
                    player.src = "images/paper.png";
                } else if (e.target.id === "scissors") {
                    playerchoi = "scissors";
                    player.src = "images/scissors.png";
                } 
            

                getRandom()
                getResult()
            }, 900)}
    })

});



function getRandom() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computerchoi = "rock";
    } else if (randomNum === 2) {
        computerchoi = "paper";

    } else if (randomNum === 3) {
        computerchoi = "scissors";
    }
    computer.src = "images/" + computerchoi + ".png";

}






function getResult() {

    if (computerchoi === playerchoi) {
        draw = "draw".toUpperCase()
    } else {
        draw = " ";
    }
    if (computerchoi === "rock") {
        if (playerchoi === "paper") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        } else if (playerchoi === "scissors") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        }
    } else if (computerchoi === "paper") {
        if (playerchoi === "rock") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        } else if (playerchoi === "scissors") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        }
    } else if (computerchoi === "scissors") {
        if (playerchoi === "paper") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        } else if (playerchoi === "rock") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        }
    }
    if (cpoints >= 5) {
        cpoints = 0;
        ppoints = 0;
        document.getElementById("card2").style.top = "calc(50% - 280px)";
    } else if (ppoints >= 5) {
        document.getElementById("card1").style.top = "calc(50% - 280px)";
        cpoints = 0;
        ppoints = 0;

    }
    resultGame.innerHTML = draw

}

function clicedagainwin() {
    document.getElementById("card1").style.top = "-100%";
    playerscore.innerHTML = ppoints;
    computerscore.innerHTML = cpoints;
}
function clicedagainlos() {
    document.getElementById("card2").style.top = "-100%";
    playerscore.innerHTML = ppoints;
    computerscore.innerHTML = cpoints;
}
