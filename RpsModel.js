class RpsModel {
    constructor() {
        this.playerScore = 0;
        this.compScore = 0;
        this.round = 0;
        this.currentPlayerChoice = 99;
        this.currentComputerChoice = 99;

        this.finished = false;
    }

        /* pass player choice in as an integer 0-2. 
    returns 0: player wins, 1: computer wins, 2: tie */
    playRound(playerChoice) {
        if (typeof(playerChoice) !== "number") {return}
        if (playerChoice !== 0 && playerChoice !== 1 && playerChoice !== 2) return;

        this.currentPlayerChoice = playerChoice;
        this.currentComputerChoice = this.getComputerChoice();
        const result = this.computeRound(this.currentPlayerChoice, this.currentComputerChoice);

        if (result === 0)  this.playerScores();
        else if (result === 1) this.computerScores();
        else this.tie();
        this.round++;
        if (this.playerScore >= 3 || this.compScore >= 3) this.endGame(); 
    }

    playerScores() {
        this.playerScore++;

    }

    computerScores() {
        this.compScore++;

    }
    tie() {

    }

    endGame() {
        this.finished = true;
    }

    /**computes a random draw for the computer.
     * returns 0 = rock, 1 = paper, 2 = scissors
    */
    getComputerChoice() {
        let n = (Math.floor(Math.random() * 10) + 1) ;

        if (n <= 3) return 0;
        else if (n > 3 && n <= 6) return 1;
        else return 2;
    }

    computeRound(playerChoice, computerChoice) {
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

    stringifyPlayerChoice() {
        return this.convertSelectionToString(this.currentPlayerChoice);
    }

    stringifyComputerChoice() {
        return this.convertSelectionToString(this.currentComputerChoice);
    }

    convertSelectionToString(selection) {
        if (selection === 0) return "Rock";
        if (selection === 1) return "Paper";
        if (selection === 2) return "Scissors";

    }
}