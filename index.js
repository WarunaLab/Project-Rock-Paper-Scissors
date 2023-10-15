alert("Welcome to Rock Paper Scissors. Do you want to play?");

// Prompt for play function
const getPlayerChoice = () => {
    let choice = prompt('Enter your weapon (Rock, Paper, Scissor)').toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissor') {
        choice = prompt('Enter your weapon (Rock, Paper, Scissor)').toLowerCase();
    }
    return choice;
};

// Defining the score variables
let playerScore = 0;
let computerScore = 0;

// Get computer choice function
const getComputerChoice = () => {
    const randomNumber = Math.random();

    if (randomNumber <= 0.34) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

// Number of rounds to play
const gameRounds = 5;

// Game
for (let i = 0; i < gameRounds; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            alert('This round is a draw.');
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissor') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissor' && computerChoice === 'paper')
        ) {
            alert(`You win! ${playerChoice} beats ${computerChoice}`);
            playerScore += 1;
        } else {
            alert(`Computer wins! ${computerChoice} beats ${playerChoice}`);
            computerScore += 1;
        }
    }

    playRound(playerChoice, computerChoice);
}

// Determine the winner
if (playerScore > computerScore) {
    alert('Congratulations, you win!');
} else if (computerScore > playerScore) {
    alert('Try again, the computer is the winner.');
} else {
    alert('It\'s a tie. No one wins.');
}
