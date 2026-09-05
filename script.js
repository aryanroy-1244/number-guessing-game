let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let score = 100;

console.log("Secret number:", secretNumber);

const guessButton = document.getElementById("guessButton");
const guessInput = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

guessButton.addEventListener("click", function() {

    let userGuess = Number(guessInput.value);

    attempts++;

    attemptsDisplay.textContent = "Attempts: " + attempts;


    // SCORE SYSTEM

    if (attempts === 1) {
        score = 100;
    }
    else if (attempts <= 3) {
        score = 90;
    }
    else if (attempts <= 7) {
        score = 70;
    }
    else if (attempts <= 10) {
        score = 50;
    }
    else if (attempts <= 15) {
        score = 30;
    }
    else {
        score = 10;
    }

    scoreDisplay.textContent = "Score: " + score;



    // GUESS CHECK

let difference = Math.abs(userGuess - secretNumber);

if (userGuess === secretNumber) {
    message.textContent = "Correct! You won!";
    document.querySelector(".game-container").classList.add("win-animation");
    createConfetti();
}
else if (difference < 3) {
    message.textContent = "Very close!";
}
else if (difference < 10 && userGuess > secretNumber) {
    message.textContent = "Close but high!";
}
else if (difference < 10 && userGuess < secretNumber) {
    message.textContent = "Close but low!";
}
else if (userGuess > secretNumber) {
    message.textContent = "Too high!";
}
else {
    message.textContent = "Too low!";
}

});

newGameButton.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    score = 100;

    attemptsDisplay.textContent = "Attempts: 0";
    scoreDisplay.textContent = "Score: 100";
    message.textContent = "";
    guessInput.value = "";
});

function createConfetti() {

    const confetti = document.getElementById("confetti");

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti-piece");

        piece.style.left = Math.random() * 100 + "%";

        piece.style.backgroundColor =
            ["red", "blue", "green", "orange", "purple", "yellow", "pink"]
            [Math.floor(Math.random() * 7)];

        piece.style.animationDelay = Math.random() * 0.5 + "s";

        confetti.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 2500);
    }
}