import './index.css';

//import
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup';
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
//import {initialCards} from '../constants/initialCards.js'
import {createCardObject} from '../utils/utils.js'
import PopupWithImage from '../components/PopupWithImage';
import PopupWithConfirmation from '../components/PopupWithConfirmation';
import Api from '../components/Api';


//buttons
const buttonOpenEditProfileForm = document.querySelector('.profile__edit');
const buttonOpenAddCardForm = document.querySelector('.profile__add');
const buttonOpenAvatarChangeForm = document.querySelector('.profile__avatar-change');

//profileData
const user = new UserInfo('.profile__name', '.profile__description', '.profile__avatar');

//fields
const profileNameField = document.querySelector('#profile__name__field');
const profileDescriptionField = document.querySelector('#profile__description__field');



//popups
const popupAccountChange = new PopupWithForm('#account-change',{
    callback: (data)=>{
        popupAccountChange.buttonSavingChange();
        api.redactProfile(data.profile__name, data.profile__description)
        .then((profileData)=>{
            user.setUserInfo(profileData.name, profileData.about);
            popupAccountChange.close();
        })
        .catch((err) => {
            console.log(err);
          })  
        .finally(()=>{
            popupAccountChange.buttonSavingChange();
        })
    }
});
popupAccountChange.setEventListeners();

const popupForImage = new PopupWithImage('#image-show');
popupForImage.setEventListeners();
const popupAvatarChange = new PopupWithForm('#avatar-change',{
    callback: (data)=>{
        popupAvatarChange.buttonSavingChange();
        api.changeAvatar(data.avatar__image)
        .then((profileData)=>{
            user.setAvatar(profileData.avatar);
            popupAvatarChange.close();
        })
        .catch((err) => {
            console.log(err);
        })  
        .finally(()=>{
            popupAvatarChange.buttonSavingChange();
        })
    }
})
popupAvatarChange.setEventListeners();
const popupConfirmDelete = new PopupWithConfirmation('#confirm-delete',{
    callback: (card)=>{
        popupConfirmDelete.buttonSavingChange();
        api.deleteCard(card.getID())
        .then(()=>{
            card.removeCard();
            popupConfirmDelete.close();
        })
        .catch((err) => {
            console.log(err);
        }) 
        .finally(()=>{
            popupConfirmDelete.buttonSavingChange();
        })
    }
})
popupConfirmDelete.setEventListeners();






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
    popup: popupForImage,
    popupConfirm: popupConfirmDelete
};

//mainCode
const editForm = document.querySelector('#edit_form');
const editFormValidator = new FormValidator(selectorList, editForm);
editFormValidator.enableValidation();
const addForm = document.querySelector('#add_form');
const addFormValidator = new FormValidator(selectorList, addForm);
addFormValidator.enableValidation();
const changeForm = document.querySelector('#change_form');
const changeFormValidator = new FormValidator(selectorList, changeForm);
changeFormValidator.enableValidation();
const confirmForm = document.querySelector('#confirm_form');
const confirmFormValidator = new FormValidator(selectorList, confirmForm);
confirmFormValidator.enableValidation();





buttonOpenEditProfileForm.addEventListener('click', showEditPopup); 
buttonOpenAvatarChangeForm.addEventListener('click', showChangePopup)


function showEditPopup(){
    const userAbout = user.getUserInfo();
    profileNameField.value = userAbout.name;
    profileDescriptionField.value = userAbout.description;
    popupAccountChange.open();
}


function showChangePopup(){
    popupAvatarChange.open();
}





//Api`s
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-75',
    headers: {
      authorization: '6c4e8e15-fb16-4272-8358-6586683c02aa',
      'Content-Type': 'application/json'
    }
});

api.getInitialData()
.then((res)=>{
    const [resProfile, resCards] = res;
    user.setUserInfo(resProfile.name, resProfile.about)
    user.setAvatar(resProfile.avatar)
    const profileId = resProfile._id;
    const initialCards = resCards;
    const cardList = new Section({
        items:initialCards, 
        renderer:(item)=>{
            popupImageInfo.cardInfo = item;
            const card = createCardObject(popupImageInfo, profileId, api);
            const cardElement = card.createCard();
            cardList.addItem(cardElement);
        }
      },
      cardConteinerSelector
    );
    
    cardList.renderItems();
    const popupImageLoad = new PopupWithForm('#image-load',{
        callback: (data)=>{
            const cardInfo = {
                name: data.place__name,
                link: data.place__image,
                likes: []
            };
            popupImageInfo.cardInfo = cardInfo;
            popupImageLoad.buttonSavingChange();
            api.addNewCard(cardInfo.name, cardInfo.link)
            .then((cardInfo)=>{
                popupImageInfo.cardInfo = cardInfo;
                const card = createCardObject(popupImageInfo, profileId, api);
                const cardElement = card.createCard();
                cardList.addItem(cardElement);
                popupImageLoad.close();
            })
            .catch((err) => {
                console.log(err);
              })  
            .finally(()=>{
                popupImageLoad.buttonSavingChange();
            })           
        }
    });
    popupImageLoad.setEventListeners();
    return {
        popupImageLoad: popupImageLoad
    }
})
.then((objects)=>{
    buttonOpenAddCardForm.addEventListener('click', function (){
        objects.popupImageLoad.open();
    });
})
.catch((err) => {
    console.log(err);
  })  

