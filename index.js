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

//promt for play

let playerChoice = prompt('Enter your weapon ( Rock, Paper, Scissor)').toLowerCase();
    while (playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissor') {
        playerChoice = prompt('Enter your weapon ( Rock, Paper, Scissor)').toLowerCase();
    };

// get computer choice

let computerChoice = () => {
    const randomNumber = Math.random();

    if (randomNumber <= 0.34) {
        return 'rock';
    } else if (randomNumber > 0.34 && randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissor'
    }

}


//function for play
let playRound = (playerChoice, computerChoice) => {
    // decide who won
    if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissor' || playerChoice === 'scissor' && computerChoice === 'rock') {
        //computer won- 1 mark to computer
        alert(`You lose ${playerChoice} beat ${computerChoice}`);

    } else if (playerChoice === 'rock' && computerChoice === 'scissor' || playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'rock') {
        // player won- 1 mark to player
        alert(`You won ${playerChoice} beat ${computerChoice}`);
    } else {
        // draw- 0 mark to both
        alert('This round draw');
    }
playRound(playerChoice, computerChoice())
}

//code for to alert who won in each round

 //alert(`You lose ${} beat ${}`)




//final game function

    
