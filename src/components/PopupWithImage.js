import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        
    }
    open(data){ // переписать метод
        this._name = data.name;
        this._src = data.src;
        const popupImageShow = this._popup;
        const imageForShow = popupImageShow.querySelector('.popup__image');
        const textForShow = popupImageShow.querySelector('.popup__text');
        imageForShow.alt = `${this._name}`;
        textForShow.textContent = this._name;
        imageForShow.src = this._src; 
        super.open();
    }
}