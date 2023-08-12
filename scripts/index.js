//import
import { openPopup, closePopup} from "../utils/utils.js";
import Card from './card.js'
import FormValidator from './FormValidator.js'

//buttons
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const buttonOpenAddCardForm = document.querySelector('.profile__add');

//profileData
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//fields
const profileNameField = document.querySelector('#profile__name__field');
const profileDescriptionField = document.querySelector('#profile__description__field');
const placeNameField = document.querySelector('#place__name__field');
const placeImageField = document.querySelector('#place__image__field');

//forms
const formEditProfile = document.querySelector('#edit_form');
const formAddCard = document.querySelector('#add_form');

//popups
const popupAccountChange = document.querySelector('#account-change');
const popupImageLoad = document.querySelector('#image-load');
const popupList = Array.from(document.querySelectorAll('.popup'));

//otherElements
const elements = document.querySelector('.elements__grid');
const templateSelector = '#image-template';
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

function createCard(cardInfo) {
    const cardElement = new Card(cardInfo, templateSelector);
    return cardElement.createCard();
    
}

initialCards.forEach(function(cardInfo){
    elements.append(createCard(cardInfo));
});

popupList.forEach(function(popup){
    popup.addEventListener('click', function(evt){
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(popup);
        }
    })
})

formEditProfile.addEventListener('submit',saveEditFormInfo);
formAddCard.addEventListener('submit', saveAddFormInfo);
buttonOpenEditProfileForm.addEventListener('click', showEditPopup); 
buttonOpenAddCardForm.addEventListener('click', showAddPopup);

function showEditPopup(){
    profileNameField.value = profileName.textContent;
    profileDescriptionField.value = profileDescription.textContent;
    openPopup(popupAccountChange);
}

function showAddPopup(){
    openPopup(popupImageLoad);
}

function saveEditFormInfo(evt){
    evt.preventDefault();
    profileName.textContent = profileNameField.value;
    profileDescription.textContent = profileDescriptionField.value;
    closePopup(popupAccountChange);
}

function saveAddFormInfo(evt){
    evt.preventDefault();
    const imageName = placeNameField.value;
    const imageSource = placeImageField.value;
    formAddCard.reset();
    const cardInfo = {
        name: imageName,
        link: imageSource
    }
    elements.prepend(createCard(cardInfo));
    closePopup(popupImageLoad);
}
