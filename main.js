const shapes = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;
let result = "";

//this function selects randomly one shape from the array of shapes to be the computer's choice
function computerPlay() {
    return shapes[Math.floor(Math.random() * shapes.length)];
}

function playRound(playerShape){
    let computerSelection = computerPlay();
    if(playerShape === shapes[0]){
        switch(computerSelection){
            case shapes[0]:
                result = `It's a tie! Both of you played ${computerSelection}.`;
                break;
            case shapes[1]:
                result = `You lost! You played ${playerShape} and the computer played ${computerSelection}. Paper beats Rock!`;
                computerScore++;
                break;
            case shapes[2]:
                result = `You won! You played ${playerShape} and the computer played ${computerSelection}. Rock beats Scissors!`;
                playerScore++;
                break;
        }
    } else if(playerShape === shapes[1]){
        switch(computerSelection){
            case shapes[0]:
                result = `You won! You played ${playerShape} and the computer played ${computerSelection}. Paper beats Rock!`;
                playerScore++;
                break;
            case shapes[1]:
                result = `It's a tie! Both of you played ${computerSelection}.`;
                break;
            case shapes[2]:
                result = `You lost! You played ${playerShape} and the computer played ${computerSelection}. Scissors beats Paper!`;
                computerScore++;
                break;
        }
    } else if(playerShape === shapes[2]){
        switch(computerSelection){
            case shapes[0]:
                result = `You lost! You played ${playerShape} and the computer played ${computerSelection}. Rock beats Scissors!`;
                computerScore++;
                break;
            case shapes[1]:
                result = `You won! You played ${playerShape} and the computer played ${computerSelection}. Scissors beats Paper!`;
                playerScore++;
                break;
            case shapes[2]:
                result = `It's a tie! Both of you played ${computerSelection}.`;
                break;
        }
    }

    if(playerScore == 5){
        document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
        document.getElementById('description').innerHTML = `CONGLATULATION! A winner is you!`;
        disableButtons();
    } else if(computerScore == 5){
        document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
        document.getElementById('description').innerHTML = `You lost!`;
        disableButtons();
    } else {
        appendText();
        updateScore();
    }

};


function appendText(){
    document.getElementById('description').innerHTML = result;
};

function updateScore(){
    document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
    document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
};

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id);
    // console.log(button.id);
}));
