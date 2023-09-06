<<<<<<< HEAD
import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(data, popupSelector){
        super(popupSelector);
        this._name = data.name;
        this._src = data.src;
    }
    open(){ // переписать метод
        const popupImageShow = this._popup;
        const imageForShow = popupImageShow.querySelector('.popup__image');
        const textForShow = popupImageShow.querySelector('.popup__text');
        imageForShow.alt = `${this._name}`;
        textForShow.textContent = this._name;
        imageForShow.src = this._src; 
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escCaller);
        if(!(this._clickEnabled)){
            this.setEventListeners();
        }
    }
=======
import Popup from './Popup.js';

export default class PopupWithImage extends Popup{
    constructor(data, popupSelector){
        super(popupSelector);
        this._name = data.name;
        this._src = data.src;
    }
    open(){ // переписать метод
        const popupImageShow = this._popup;
        const imageForShow = popupImageShow.querySelector('.popup__image');
        const textForShow = popupImageShow.querySelector('.popup__text');
        imageForShow.alt = `${this._name}`;
        textForShow.textContent = this._name;
        imageForShow.src = this._src; 
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escCaller);
        if(!(this._clickEnabled)){
            this.setEventListeners();
        }
    }
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
}