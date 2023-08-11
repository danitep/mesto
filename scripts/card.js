export default class Card {
    constructor(data, templateSelector) {
        this._name = data.name;
        this._link = data.link;
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
        const popupImageShow = document.querySelector('#image-show');
        const imageForShow = popupImageShow.querySelector('.popup__image');
        const textForShow = popupImageShow.querySelector('.popup__text');
        imageForShow.src = evt.target.src;
        const name = evt.target.closest('.element').querySelector('.element__title').textContent;
        imageForShow.alt = `${name}`;
        textForShow.textContent = name; 
        openPopup(popupImageShow);
    }

    _removeCard(evt){
        evt.target.closest('.element').remove();
    }

    _likeToggle(evt){
        evt.target.classList.toggle('element__like_active');
    }

}

import { openPopup } from "./index.js";