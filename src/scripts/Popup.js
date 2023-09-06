export default class Popup{
    constructor(popupSelector){
        this._selector = popupSelector;
        this._popup = document.querySelector(this._selector);
        this._clickEnabled = false;
        this._escCaller = this._handleEscClose.bind(this);
    }
    _handleEscClose(evt){
        if (evt.key === "Escape"){
            this.close();
        }
    }
    open(){
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._escCaller);
        if(!(this._clickEnabled)){
            this.setEventListeners();
        }
    }
    close(){
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
        this._clickEnabled = true;    
    }
}