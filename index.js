//This is the script file for project rock paper scissor
/* Planning
1. need to create to get user input. convert it to lower case, and save.
2. function should ask to repeatedly
3. when score is 5 end the program saying who won
4. when ever user enter a choice, computer should randomly enter a choice also
5. match choices and give a score 
6. hierarchial score system should create
7. count scores plater who gets 5 first win
8. promt the win massege.
9. function= getComputerChoice
10. scoring system?
*/
// Opening..

alert("Welcome to Rock Paper Scissor. Do you want to play?");

//prompt for play function

const playerChoice = () => prompt('Enter your weapon ( Rock, Paper, Scissor)').toLowerCase();
    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissor') {
        playerChoice = prompt('Enter your weapon ( Rock, Paper, Scissor)').toLowerCase();
    };

// defining the score variables
let playerScore = 0;
let computerScore = 0;

// get computer choice function
const computerChoice = () => {
    const randomNumber = Math.random();

    if (randomNumber <= 0.34) {
        return 'rock';
    } else if (randomNumber > 0.34 && randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissor'
    }

}





// game
let game = () => {

    const playRound = (playerChoice, computerChoice) => { //play round function
            
            if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissor' || playerChoice === 'scissor' && computerChoice === 'rock') {
                //computer won- 1 mark to computer
                alert(`You lose ${playerChoice} beat ${computerChoice}`);
                computerScore += 1;
            
        
            } else if (playerChoice === 'rock' && computerChoice === 'scissor' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'rock') {
                // player won- 1 mark to player
                alert(`You won ${playerChoice} beat ${computerChoice}`);
                playerScore += 1;
            } else {
                // draw- 0 mark to both
                alert('This round draw');}
        
        
        }
        computerChoice = computerChoice();
        playerChoice = playerChoice();
        playRound(playerChoice, computerChoice);

}

//final game function

// who won
if (playerScore > computerScore) {
    alert('Congratulations, you Win');
} else {
    alert('Try again, the computer is the winner');
}

    
