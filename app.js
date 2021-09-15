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

    appendText();
};


function appendText(){
    document.getElementById('description').innerHTML = result;
}



buttons.forEach(button => button.addEventListener('click', () => {
    playRound(button.id);
    // console.log(button.id);
}));
