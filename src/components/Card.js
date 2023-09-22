export default class Card {
    constructor({data, handleCardClick, handleLikeClick, popupConfirm, profileId}, templateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._profileId = profileId;
        this._cardId = data._id;
        this._ownerId = data.owner._id;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._templateSelector = templateSelector;
        this._popupConfirm = popupConfirm;
        this._likes = data.likes.length;
        this._isLiked = false
        data.likes.forEach(user => {
            if(user._id === this._profileId){
                this._isLiked = true
            }
        });
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
        const likes = this._element.querySelector('.element__count')
        image.src = this._link;
        image.alt = `${this._name}`;
        text.textContent = this._name;
        likes.textContent = this._likes;
        this._setEventListeners();
        return this._element;
    }

    getID(){
        return this._cardId;
    }

    _setEventListeners(){
        const deleteButton = this._element.querySelector('.element__delete');
        const likeButton = this._element.querySelector('.element__like');
        if (this._isLiked){
            likeButton.classList.toggle('element__like_active');
        }
        const image = this._element.querySelector('.element__image');
        image.addEventListener('click', (evt)=>{
            this._showImagePopup(evt);
        });
        deleteButton.addEventListener('click', (evt)=>{
            this._popupConfirm.open(this);
        });
        if (this._profileId !== this._ownerId){
            deleteButton.remove();
        }
        likeButton.addEventListener('click', (evt)=>{
            this._likeToggle(evt);
        });
    }
    
    _showImagePopup(){
        this._handleCardClick(this._name, this._link);
    }

    removeCard(){
        this._element.remove();
        this._element = null;
    }

    _likeToggle(evt){
        evt.target.classList.toggle('element__like_active');
        this._isLiked = !this._isLiked;
        this._handleLikeClick(this._isLiked, this._cardId);
    }

    setLikeCount(count){
        const likes = this._element.querySelector('.element__count')
        this._likes = count;
        likes.textContent = this._likes
    }
}

