const shapes = ["Rock", "Paper", "Scissors"];
const playerShape = function(){
    let shape = window.prompt("Jan Ken Po!").toLowerCase();
    console.log(shape);
    return shape;
}

const computerPlay = function() {
    const randomComputer = Math.floor(Math.random() * shapes.length);
    console.log(shapes[randomComputer]);
    return shapes[randomComputer];
}

// function janKen(playerShape, computerPlay){
//     switch(playerShape, computerPlay){
//         case "rock" && "Rock":
//             console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
//             break;
//         case "rock" && "Paper":
//             console.log(`You lost! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Paper beats Rock!`);
//             break;
//         case "rock" && "Scissors":
//             console.log(`You win! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Rock beats Scissors!`);
//             break;
//         case "paper" && "Rock":
//             console.log(`You win! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Paper beats Rock!`);
//             break;
//         case "paper" && "Paper": 
//             console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
//             break;
//         case "paper" && "Scissors":
//             console.log(`You lost! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Scissors beats Paper!`);
//             break;
//         case "scissors" && "Rock":
//             console.log(`You lost! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Rock beats Scissors!`);
//             break;
//         case "scissors" && "Paper":
//             console.log(`You win! You played ${playerShape}. The computer played ${computerPlay.toLowerCase()}. Scissors beats Paper!`);
//             break;
//         case "scissors" && "Scissors":
//             console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
//             break;
//     }
// }


function janKen(playerShape, computerPlay){
    if(playerShape == 'rock'){
        switch(computerPlay){
            case 'Rock':
                console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
                break;
            case 'Paper':
                console.log(`You lost! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Paper beats Rock!`);
                break;
            case 'Scissors':
                console.log(`You won! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Rock beats Scissors!`);
                break;
        }
    } else if(playerShape == 'paper'){
        switch(computerPlay){
            case 'Rock':
                console.log(`You won! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Paper beats Rock!`);
                break;
            case 'Paper':
                console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
                break;
            case 'Scissors': 
                console.log(`You lost! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Scissors beats Paper!`);
                break;
        }
    } else if(playerShape == 'scissors'){
        switch(computerPlay){
            case 'Rock':
                console.log(`You lost! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Rock beats Scissors!`);
                break;
            case 'Paper':
                console.log(`You won! You played ${playerShape} and the computer played ${computerPlay.toLowerCase()}. Scissors beats Paper!`);
                break;
            case 'Scissors': 
                console.log(`It's a tie! Both of you played ${computerPlay.toLowerCase()}.`);
                break;
        }
    }
}

function playRound(){
    alert(`Let's play some Jan Ken Po! Best of 5 rounds.`)
    for(i = 1; i <= 5; i++){
        janKen(playerShape(), computerPlay());
    }
}

playRound();
