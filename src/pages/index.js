import './index.css';

//import
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {initialCards} from '../constants/initialCards.js'
import {createCardObject} from '../utils/utils.js'
import PopupWithImage from '../components/PopupWithImage';


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
    callback: (data)=>{
        user.setUserInfo(data.profile__name, data.profile__description);
    }
});
popupAccountChange.setEventListeners();
const popupImageLoad = new PopupWithForm('#image-load',{
    callback: (data)=>{
        const cardInfo = {
            name: data.place__name,
            link: data.place__image
        };
        popupImageInfo.cardInfo = cardInfo;
        const card = createCardObject(popupImageInfo);
        const cardElement = card.createCard();
        cardList.addItem(cardElement);
    }
});
popupImageLoad.setEventListeners();
const PopupForImage = new PopupWithImage('#image-show');
PopupForImage.setEventListeners();

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
const popupImageInfo = {
    cardInfo: '',
    templateSelector: templateSelector,
    popup: PopupForImage
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
        popupImageInfo.cardInfo = item;
        const card = createCardObject(popupImageInfo);
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