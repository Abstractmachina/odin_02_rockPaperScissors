class RpsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.btn_rock.addEventListener('click', this.handlePlayerMove(0));
        
    }

    handlePlayerMove(playerChoice) {
        
        this.model.playRound(playerChoice);
        console.log("player score: " + this.model.playerScore);
        console.log("computer score: "+ this.model.compScore);
        // const test = document.createElement('h1');
        // test.textContent = 'TEST';
        // app.append(test);


        // const t1 = document.querySelector('#root');
        // const t2 = document.createElement('h1');
        // t2.textContent = "TEST";
        // t1.append(t2);
    }
}