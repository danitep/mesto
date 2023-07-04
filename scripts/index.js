let edit_button = document.querySelector('.profile__edit');
let close_button = document.querySelector('.popup__close');
let like_buttons = document.querySelectorAll('.element__like');
let popup=document.querySelector('.popup');
let profile_name_field = document.querySelector('#profile__name');
let profile_name = document.querySelector('.profile__name');
let profile_description_field = document.querySelector('#profile__description');
let profile_description = document.querySelector('.profile__description');
let form = document.querySelector('.popup__container');

form.addEventListener('submit', SaveInfo); 
close_button.addEventListener('click', ClosePopup); 
edit_button.addEventListener('click', ShowPopup); 

function ShowPopup() {
    popup.classList.add('popup_opened');
    profile_name_field.value = profile_name.textContent;
    profile_description_field.value = profile_description.textContent;
} 


function ClosePopup(evt) {
    evt.preventDefault();
    popup.classList.remove('popup_opened');
}


function SaveInfo(evt) {
    evt.preventDefault();
    profile_name.textContent = profile_name_field.value;
    profile_description.textContent = profile_description_field.value;
    ClosePopup(evt);
}


