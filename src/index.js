<<<<<<< HEAD
import './pages/index.css';

//import
import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import Section from './scripts/Section.js'
import PopupWithImage from './scripts/PopupWithImage.js'
import PopupWithForm from './scripts/PopupWithForm.js'
import UserInfo from './scripts/UserInfo.js'
import {initialCards} from './constants/initialCards.js'


//buttons
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const buttonOpenAddCardForm = document.querySelector('.profile__add');

//profileData
const user = new UserInfo('.profile__name', '.profile__description');

//fields
const profileNameField = document.querySelector('#profile__name__field');
const profileDescriptionField = document.querySelector('#profile__description__field');



//popups
const popupAccountChange = new PopupWithForm('#account-change',{
    callback: (evt)=>{
        evt.preventDefault();
        popupAccountChange._getInputValues();
        popupAccountChange.close();
        const info = {
            name: popupAccountChange._inputsContent[0],
            description: popupAccountChange._inputsContent[1]
        };
        user.setUserInfo(info.name, info.description);
    }
});
const popupImageLoad = new PopupWithForm('#image-load',{
    callback: (evt)=>{
        evt.preventDefault();
        popupImageLoad._getInputValues();
        popupImageLoad.close();
        const cardInfo = [{
            name: popupImageLoad._inputsContent[0],
            link: popupImageLoad._inputsContent[1]
        }];
        const cardList = new Section({
            items:cardInfo, 
            renderer:(item)=>{
                const card = new Card({
                    data:item,
                    handleCardClick:(evt)=>{
                        const imageInfo = {
                            name: evt.target.closest('.element').querySelector('.element__title').textContent,
                            src: evt.target.src
                        }
                        const popup = new PopupWithImage(imageInfo,'#image-show');
                        popup.open();
                    }
                }, 
                templateSelector);
                const cardElement = card.createCard();
                cardList.addItem(cardElement);
            }
        },
        cardConteinerSelector
        );
        cardList.renderItems();
    }
});

//otherElements
const templateSelector = '#image-template';
const cardConteinerSelector = '.elements__grid';
const selectorList = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

//mainCode
const formList = Array.from(
    document.querySelectorAll(selectorList.formSelector)
);

formList.forEach(function (form) {
    const formElement = new FormValidator(selectorList, form);
    formElement.enableValidation();
});



const cardList = new Section({
    items:initialCards, 
    renderer:(item)=>{
        const card = new Card({
            data:item,
            handleCardClick:(evt)=>{
                const imageInfo = {
                    name: evt.target.closest('.element').querySelector('.element__title').textContent,
                    src: evt.target.src
                }
                const popup = new PopupWithImage(imageInfo,'#image-show');
                popup.open();
            }
        }, 
        templateSelector);
        const cardElement = card.createCard();
        cardList.addItem(cardElement);
    }
  },
  cardConteinerSelector
);

cardList.renderItems();


buttonOpenEditProfileForm.addEventListener('click', showEditPopup); 
buttonOpenAddCardForm.addEventListener('click', showAddPopup);

function showEditPopup(){
    const userAbout = user.getUserInfo();
    profileNameField.value = userAbout.name;
    profileDescriptionField.value = userAbout.description;
    popupAccountChange.open();
}

function showAddPopup(){
    popupImageLoad.open();
}
=======
import './pages/index.css';

//import
import Card from './scripts/card.js'
import FormValidator from './scripts/FormValidator.js'
import Section from './scripts/Section.js'
import PopupWithImage from './scripts/PopupWithImage.js'
import PopupWithForm from './scripts/PopupWithForm.js'
import UserInfo from './scripts/UserInfo.js'
import {initialCards} from './constants/initialCards.js'


//buttons
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const buttonOpenAddCardForm = document.querySelector('.profile__add');

//profileData
const user = new UserInfo('.profile__name', '.profile__description');

//fields
const profileNameField = document.querySelector('#profile__name__field');
const profileDescriptionField = document.querySelector('#profile__description__field');



//popups
const popupAccountChange = new PopupWithForm('#account-change',{
    callback: (evt)=>{
        evt.preventDefault();
        popupAccountChange._getInputValues();
        popupAccountChange.close();
        const info = {
            name: popupAccountChange._inputsContent[0],
            description: popupAccountChange._inputsContent[1]
        };
        user.setUserInfo(info.name, info.description);
    }
});
const popupImageLoad = new PopupWithForm('#image-load',{
    callback: (evt)=>{
        evt.preventDefault();
        popupImageLoad._getInputValues();
        popupImageLoad.close();
        const cardInfo = [{
            name: popupImageLoad._inputsContent[0],
            link: popupImageLoad._inputsContent[1]
        }];
        const cardList = new Section({
            items:cardInfo, 
            renderer:(item)=>{
                const card = new Card({
                    data:item,
                    handleCardClick:(evt)=>{
                        const imageInfo = {
                            name: evt.target.closest('.element').querySelector('.element__title').textContent,
                            src: evt.target.src
                        }
                        const popup = new PopupWithImage(imageInfo,'#image-show');
                        popup.open();
                    }
                }, 
                templateSelector);
                const cardElement = card.createCard();
                cardList.addItem(cardElement);
            }
        },
        cardConteinerSelector
        );
        cardList.renderItems();
    }
});

//otherElements
const templateSelector = '#image-template';
const cardConteinerSelector = '.elements__grid';
const selectorList = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

//mainCode
const formList = Array.from(
    document.querySelectorAll(selectorList.formSelector)
);

formList.forEach(function (form) {
    const formElement = new FormValidator(selectorList, form);
    formElement.enableValidation();
});



const cardList = new Section({
    items:initialCards, 
    renderer:(item)=>{
        const card = new Card({
            data:item,
            handleCardClick:(evt)=>{
                const imageInfo = {
                    name: evt.target.closest('.element').querySelector('.element__title').textContent,
                    src: evt.target.src
                }
                const popup = new PopupWithImage(imageInfo,'#image-show');
                popup.open();
            }
        }, 
        templateSelector);
        const cardElement = card.createCard();
        cardList.addItem(cardElement);
    }
  },
  cardConteinerSelector
);

cardList.renderItems();


buttonOpenEditProfileForm.addEventListener('click', showEditPopup); 
buttonOpenAddCardForm.addEventListener('click', showAddPopup);

function showEditPopup(){
    const userAbout = user.getUserInfo();
    profileNameField.value = userAbout.name;
    profileDescriptionField.value = userAbout.description;
    popupAccountChange.open();
}

function showAddPopup(){
    popupImageLoad.open();
}
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
