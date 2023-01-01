
const model = new RpsModel();
const view = new RpsView();
// const app = new RpsController(model, view);

view.btn_rock.addEventListener('click', event => {
    model.playRound(0);
    view.updateDisplay(model);
});
view.btn_pap.addEventListener('click', event => {
    model.playRound(1);
    view.updateDisplay(model);
});
view.btn_sci.addEventListener('click', event => {
    model.playRound(2);
    view.updateDisplay(model);
});
