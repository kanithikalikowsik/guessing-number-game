let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");
let randomNumberGenerateEl = Math.ceil(Math.random() * 100);

function checkNumber() {
    let gussedNumber = parseInt(userInputEl.value);
    if (gussedNumber === randomNumberGenerateEl) {
        gameResultEl.textContent = "Congratulations! You got it right";
        gameResultEl.style.backgroundColor = "#green";
    }
    else if (gussedNumber > randomNumberGenerateEl) {
        gameResultEl.textContent = "Too High! Tyr Again.";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
    else if (gussedNumber < randomNumberGenerateEl) {
        gameResultEl.textContent = "Too Low! Try Again.";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
    else {
        gameResultEl.textContent = "Please provide a valid input.";
        gameResultEl.style.backgroundColor = "#1e217c";
    }
}