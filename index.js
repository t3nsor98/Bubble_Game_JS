//bubble game

//a function to make bubbles
function makeBubble() {
    let bubble = "";
    for (let i = 0; i <= 239; i++) {
        let random_number = Math.floor(Math.random() * 10)
        bubble += `<div class="bubble">${random_number}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = bubble;
}

var timer = 60;
//function to run timer
function runTimer() {
    var timerFunc = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").innerHTML = timer;
        }
        else {
            clearInterval(timerFunc);
            //show the score
            document.querySelector("#panel-bottom").innerHTML = `<h2 class="game-over">Game Over, Your Score is ${score}</h2><button id="play-again">Play Again</button>`;
        }
    }, 1000);
}

var hit = 0;
//function to make random hit
function makeRandomHit() {
    hit = Math.floor(Math.random() * 10);
    document.getElementById("hitnum").textContent = hit;

}

var score = 0;
//a function to increase score by 10
function increaseScore() {
    score += 10;
    document.getElementById('score').innerText = `${score}`;
}

//a function to decrease score by 5
function decreaseScore() {
    score -= 5;
    document.getElementById('score').innerText = `${score}`;
}

// a function to make game functional
function Game() {
    document.querySelector("#panel-bottom").addEventListener("click", (e) => {
        if (Number(e.target.textContent) === hit) {
            increaseScore();
            makeRandomHit();
            makeBubble();
        } else if (e.target.id == "play-again") {
            location.reload();
        }
        else {
            if (timer > 0 && e.target.className == "bubble") {
                decreaseScore();
            }
        }
    });
}


function startGame() {
    makeBubble();
    Game();
    runTimer();
    makeRandomHit();
}

const gameRulesEl = document.getElementById("game-rules");
document.getElementById("lets-play").addEventListener("click", () => {
    gameRulesEl.style.display = "none";
    startGame();
})




