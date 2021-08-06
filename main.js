const playerShape = window.prompt("Jan Ken Po!");
console.log(playerShape);
const shapes = ["Rock", "Paper", "Scissors"];

const computerPlay = function() {
    const randomComputer = Math.floor(Math.random() * shapes.length);
    return shapes[randomComputer];
}

function janKen(_player, _computer){
    switch(playerShape, computerPlay){
        case "Rock" && "Rock":
            console.log("Tie!");
            break;
        case "Rock" && "Paper":
            console.log("You lost! Paper beats Rock!");
            break;
        case "Rock" && "Scissors":
            console.log("You win! Rock beats Scissors");
            break;
        case "Paper" && "Rock":
            console.log("You win! Paper beats Rock!");
            break;
        case "Paper" && "Paper": 
            console.log("Tie!");
            break;
        case "Paper" && "Scissors":
            console.log("You lost! Scissors beats Paper!");
            break;
        case "Scissors" && "Rock":
            console.log("You lost! Rock beats Scissors!");
            break;
        case "Scissors" && "Paper":
            console.log("You win! Scissors beats Paper");
            break;
        case "Scissors" && "Scissors":
            console.log("Tie!");
            break;
    }
}


janKen(playerShape, computerPlay());