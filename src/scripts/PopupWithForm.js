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
    }

    close(){
        this._form.reset()
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._escCaller);
    }

    setEventListeners(){
        const object = this;
        this._popup.addEventListener('click', function(evt){
            if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
                object.close();
            }
        });
        this._popup.addEventListener('submit', this._callback.bind(this));
        this._clickEnabled = true;    
    }
}