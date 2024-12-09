const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button");
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const restartBtn = document.getElementById('restart-btn');

let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

// Restart game
restartBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    userChoice = '';
    computerChoice = '';
    result = "Start a new game!!";

    userChoiceDisplay.innerHTML = "None";
    computerChoiceDisplay.innerHTML = "None";
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
});

// Event listener for user choices
possibleChoices.forEach(choice => 
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        getResult();
    })
);

// Generate computer's choice
function generateComputerChoice() {
    const availableChoices = ['rock', 'paper', 'scissors'];
    computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Determine the result
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a tie!";
    } else if (
        (computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "paper" && userChoice === "rock") ||
        (computerChoice === "scissors" && userChoice === "paper")
    ) {
        result = "Computer Wins!";
        computerScore++;
    } else {
        result = "You Win!";
        userScore++;
    }

    // Update UI with the results
    resultDisplay.innerHTML = result;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}
