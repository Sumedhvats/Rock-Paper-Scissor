let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let a = Math.random();
    if (a < 0.33) {
        return "rock";
    } else if (a < 0.66) {
        return "paper";
    } else {
        return "scissor";
    }
}

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        resultDiv.textContent = "It's a tie!!!";
    } else if (
        (HumanChoice === "rock" && ComputerChoice === "scissor") ||
        (HumanChoice === "paper" && ComputerChoice === "rock") ||
        (HumanChoice === "scissor" && ComputerChoice === "paper")
    ) {
        resultDiv.textContent = "You win!!!";
        humanScore++;
    } else {
        resultDiv.textContent = "You lose!!!";
        computerScore++;
    }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            resultDiv.textContent = "You won the game!";
        } else {
            resultDiv.textContent = "You lost the game!";
        }

        humanScore = 0
        computerScore = 0;

        scoreDiv.textContent = "";
    }
}

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
resultDiv.textContent = "Make your move!";