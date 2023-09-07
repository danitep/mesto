import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {callback}){
        super(popupSelector);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues(){
        const inputs = this._form.querySelectorAll('.popup__input');
        this._inputsContent = (Array.from(inputs)).map((input) => {
        return input.value;
        });
        this._formValues ={};
        inputs.forEach((input) => {this._formValues[input.name] = input.value});
        return this._formValues;
    }

    close(){
        this._form.reset()
        super.close();
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._callback(this._getInputValues());
            this.close();
        });
    }
}