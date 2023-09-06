<<<<<<< HEAD
import PopupWithImage from "./PopupWithImage.js";

//const popupImageShow = document.querySelector('#image-show');


export default class Card {
    constructor({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".element")
            .cloneNode(true);

        return cardElement;
    }

    createCard(){
        this._element = this._getTemplate();
        const image = this._element.querySelector('.element__image');
        const text = this._element.querySelector('.element__title');
        image.src = this._link;
        image.alt = `${this._name}`;
        text.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners(){
        const deleteButton = this._element.querySelector('.element__delete');
        const likeButton = this._element.querySelector('.element__like');
        const image = this._element.querySelector('.element__image');
        image.addEventListener('click', (evt)=>{
            this._showImagePopup(evt);
        });
        deleteButton.addEventListener('click', (evt)=>{
            this._removeCard(evt);
        });
        likeButton.addEventListener('click', (evt)=>{
            this._likeToggle(evt);
        });
    }
    
    _showImagePopup(evt){
        this._handleCardClick(evt);
    }

    _removeCard(evt){
        evt.target.closest('.element').remove();
    }

    _likeToggle(evt){
        evt.target.classList.toggle('element__like_active');
    }
}

=======
import PopupWithImage from "./PopupWithImage.js";

//const popupImageShow = document.querySelector('#image-show');


export default class Card {
    constructor({data, handleCardClick}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".element")
            .cloneNode(true);

        return cardElement;
    }

    createCard(){
        this._element = this._getTemplate();
        const image = this._element.querySelector('.element__image');
        const text = this._element.querySelector('.element__title');
        image.src = this._link;
        image.alt = `${this._name}`;
        text.textContent = this._name;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners(){
        const deleteButton = this._element.querySelector('.element__delete');
        const likeButton = this._element.querySelector('.element__like');
        const image = this._element.querySelector('.element__image');
        image.addEventListener('click', (evt)=>{
            this._showImagePopup(evt);
        });
        deleteButton.addEventListener('click', (evt)=>{
            this._removeCard(evt);
        });
        likeButton.addEventListener('click', (evt)=>{
            this._likeToggle(evt);
        });
    }
    
    _showImagePopup(evt){
        this._handleCardClick(evt);
    }

    _removeCard(evt){
        evt.target.closest('.element').remove();
    }

    _likeToggle(evt){
        evt.target.classList.toggle('element__like_active');
    }
}

>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
