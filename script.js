console.log("hello world");
playGame();


function playGame() {
    console.log("Welcome to Rock, Paper Scissors!");
    let playerScore = 0;
    let compScore = 0;

    console.log("A game has started. ");

    let round = 1;
    while ((playerScore < 3 && compScore < 3)) {
        console.log("Round " + round.toString());
        console.log("Current Score:");
        console.log("Player: " + playerScore.toString() + " | Computer: " + compScore.toString());
        console.log("Please select your hand:");
        const playerChoice = parseFloat(window.prompt("0 = Rock, 1 = Paper, 2 = Scissors"));

        if (playerChoice !== 0 && playerChoice !== 1 && playerChoice !== 2) {
            console.log("Invalid input! Please select an interger 0-2.");
            continue;
        }
        let compChoice = getComputerChoice();


        let winner = computeRound(playerChoice, compChoice);
        if (winner === 0) {
            console.log("Player wins!");
            playerScore+=1;
        }
        else if (winner === 1) {
            console.log("Computer wins!");
            compScore+=1;
        }
        else {
            console.log("It's a tie!");
        }

        round+=1;
    }

    console.log("Game finished with a score of P " + playerScore.toString() + "| C " + compScore.toString());
    if (playerScore > compScore) {
        console.log("Player won!");
    }
    else console.log("Computer won!")
    
}


//0 = rock, 1 = paper, 2 = scissors
function getComputerChoice() {
    let n = (Math.floor(Math.random() * 10) + 1) ;

    if (n <= 3) return 0;
    else if (n > 3 && n <= 6) return 1;
    else return 2;
}

function computeRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 2; //it's a tie;

    if (playerChoice === 0) { //rock
        if (computerChoice === 1) return 1; //comp paper. lose!
        else return 0; //comp scissors. win!
    }

    if (playerChoice === 1) { //paper
        if (computerChoice === 2) return 1; //comp scissors. lose!
        else return 0; //comp rock. win!
    }

    if (playerChoice === 2) { //scissors
        if (computerChoice === 0) return 1; //comp rock. lose!
        else return 0; //comp paper. win!
    }
}