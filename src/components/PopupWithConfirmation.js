import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup{
    constructor(popupSelector, {callback}){
        super(popupSelector);
        this._callback = callback;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__button');
        this._originalText = this._submitButton.textContent;
    }
    
    open(card){
        this._card = card;
        super.open();
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
            this._callback(this._card);
        });
    }
}