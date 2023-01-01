class RpsView{
    constructor() {

        this.app = this.getElement('#root');
        this.title = this.createElement('h1');
        this.title.textContent = "Rock, Paper, Scissors";

        this.displayContainer = this.createElement('div');
        this.displayContainer.classList.add('displayContainer');

        this.displayAnnouncement = this.createElement('p');
        this.displayAnnouncement.classList.add('announcement');
        this.displayAnnouncement.textContent = 'Welcome to Rock Paper Scissors! A game has started! Please choose a hand:';
        this.displayContainer.appendChild(this.displayAnnouncement);

        this.btnContainer = this.createElement('div', 'btnContainer');


        this.btn_rock = this.createElement('button');
        this.btn_rock.textContent = "Rock";
        this.btn_rock.setAttribute('id', 'btn_r');

        this.btn_pap = this.createElement('button');
        this.btn_pap.textContent = "Paper";
        this.btn_pap.setAttribute('id', 'btn_p');

        this.btn_sci = this.createElement('button');
        this.btn_sci.textContent = "Scissors";
        this.btn_sci.setAttribute('id', 'btn_s');

        this.btnContainer.append(this.btn_rock, this.btn_pap, this.btn_sci);

        this.app.append(this.title, this.displayContainer, this.btnContainer);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    updateDisplay(model) {

        this.displayAnnouncement.textContent = "Player chose " + model.stringifyPlayerChoice() + ", Computer Chose " + model.stringifyComputerChoice();

        let whoScored;
        if (document.querySelector('.whoScored')) {
            whoScored = document.querySelector('.whoScored');
        } else {
            whoScored = this.createElement('p', 'whoScored');
            this.displayContainer.appendChild(whoScored);
        }
        let scorer;
        if (model.currentRoundWinner === 0) scorer = "Player";
        else if (model.currentRoundWinner === 1) scorer = "Computer";
        else scorer = "No one"
        whoScored.textContent = scorer + " scored!";
        
        let score;
        if (document.querySelector('.score')) {
            score = document.querySelector('.score');
        } else {
            score = this.createElement('p', 'score');
            this.displayContainer.appendChild(score);
        }
        score.textContent = "Player: " + model.playerScore + " | Computer: " + model.compScore;
        


        if (model.finished) {
            this.displayVictory(model);
            return;
        }
        
        let round;
        if (document.querySelector('.round')) {
            round = document.querySelector('.round');
            
        } else {
            round = this.createElement('h2', 'round');
            this.displayContainer.insertBefore(round, this.displayAnnouncement);
        }
        round.textContent = "Round " + model.round;
        
        
        
        

    }

    displayVictory(nodel) {
        let winner;
        if (model.playerScore > model.compScore) winner = "Player";
        else winner = "Computer";

        const round = document.querySelector('.round');
        round.textContent = winner + " won!";

    }
}