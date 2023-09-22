import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._imageForShow = this._popup.querySelector('.popup__image');
        this._textForShow = this._popup.querySelector('.popup__text');
    }
    open(data){
        this._name = data.name;
        this._src = data.src;
        this._imageForShow.alt = `${this._name}`;
        this._textForShow.textContent = this._name;
        this._imageForShow.src = this._src; 
        super.open();
    }
}