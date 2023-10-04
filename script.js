const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll(".choice"));
const result = document.getElementById("result");

const correctAnswer = "agra";

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong. Try again.";
    }
}

// Reset the result message
function resetResult() {
    result.textContent = "";
}

// Add a reset button to try the question again
const resetButton = document.createElement("button");
resetButton.textContent = "Try Again";
resetButton.addEventListener("click", resetResult);
document.body.appendChild(resetButton);