//buttons
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');

//profileData
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//fields
const profileNameField = document.querySelector('#profile__name__field');
const profileDescriptionField = document.querySelector('#profile__description__field');
const placeNameField = document.querySelector('#place__name__field');
const placeImageField = document.querySelector('#place__image__field');

//forms
const editForm = document.querySelector('#edit_form');
const addForm = document.querySelector('#add_form');

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

//import
import Card from './card.js'
import FormValidator from './validate.js'


//mainCode
const formList = Array.from(
    document.querySelectorAll(selectorList.formSelector)
);
formList.forEach(function (form) {
    const formElement = new FormValidator(selectorList, form);
    formElement.enableValidation();
});


initialCards.forEach(function(cardInfo) {
    const cardElement = new Card(cardInfo, templateSelector);
    elements.append(cardElement.createCard());
});

function keyHandler(evt){
    if (evt.key === "Escape"){
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

function enableEscapeListener(){
    document.addEventListener('keydown', keyHandler)
}
function disableEscapeListener(){
    document.removeEventListener('keydown', keyHandler)
}



popupList.forEach(function(popup){
    popup.addEventListener('click', function(evt){
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')){
            closePopup(popup);
        }
    })
})

editForm.addEventListener('submit',saveEditFormInfo);
addForm.addEventListener('submit', saveAddFormInfo);

editButton.addEventListener('click', showEditPopup); 
addButton.addEventListener('click', showAddPopup);


function showEditPopup(){
    profileNameField.value = profileName.textContent;
    profileDescriptionField.value = profileDescription.textContent;
    openPopup(popupAccountChange);
}

function showAddPopup(){
    openPopup(popupImageLoad);
}

export function openPopup(popup){
    popup.classList.add('popup_opened');
    enableEscapeListener();
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    disableEscapeListener();
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
    addForm.reset();
    const cardInfo = {
        name: imageName,
        link: imageSource
    }
    const cardElement = new Card(cardInfo, templateSelector);
    elements.prepend(cardElement.createCard());
    closePopup(popupImageLoad);
}
