let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    let a = Math.random()
    if (a < 0.33) {
        return "rock";
    }
    else if (a > 0.33 && a < 0.66) {
        return "paper"
    }
    else {
        return "scissor";
    }
}

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice == ComputerChoice) {

        result.textContent = "It's a tie!"
    } else if (
        (HumanChoice === "rock" && ComputerChoice === "scissor") ||
        (HumanChoice === "paper" && ComputerChoice === "rock") ||
        (HumanChoice === "scissor" && ComputerChoice === "paper")

    ) {
        result.textContent = "You win!!!"


        humanScore += 1;
    } else if (
        (HumanChoice === "rock" && ComputerChoice === "paper") ||
        (HumanChoice === "paper" && ComputerChoice === "scissor") ||
        (HumanChoice === "scissor" && ComputerChoice === "rock")
    ) {
        result.textContent = "you loose!!!"
        computerScore++;
    } else {
        result.textContent = "Invalid choice. Please choose rock, paper, or scissor."
    }
}

let choice = "";
document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});
document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});
document.getElementById("scissor").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissor", computerChoice);
});
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
resultDiv.textContent = "You win!";
scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;