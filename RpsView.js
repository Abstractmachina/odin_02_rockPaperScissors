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
        this.displayContainer.append(this.displayAnnouncement);

        this.btn_rock = this.createElement('button');
        this.btn_rock.textContent = "Rock";
        this.btn_rock.setAttribute('id', 'btn_r');

        this.btn_pap = this.createElement('button');
        this.btn_pap.textContent = "Paper";
        this.btn_pap.setAttribute('id', 'btn_p');

        this.btn_sci = this.createElement('button');
        this.btn_sci.textContent = "Scissors";
        this.btn_sci.setAttribute('id', 'btn_s');


        this.app.append(this.title, this.displayContainer, this.btn_rock, this.btn_pap, this.btn_sci);
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

    update() {

    }
}