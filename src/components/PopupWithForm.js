import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {callback}){
        super(popupSelector);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__button');
        this._originalText = this._submitButton.textContent;
    }

    _getInputValues(){
        const inputs = this._form.querySelectorAll('.popup__input');
        this._formValues ={};
        inputs.forEach((input) => {this._formValues[input.name] = input.value});
        return this._formValues;
    }

    close(){
        this._form.reset()
        super.close();
    }

    buttonSavingChange(){
        if (this._submitButton.textContent.includes('.')){
            this._submitButton.textContent = this._originalText;
        }
        else{
            this._submitButton.textContent = 'Сохранение...';
        }
    }

    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            this._callback(this._getInputValues());
        });
    }
}