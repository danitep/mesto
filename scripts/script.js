let edit_button = document.querySelector('.profile__edit');
let close_button = document.querySelector('.popup__close');
let save_button = document.querySelector('.popup__save');
let like_buttons = document.querySelectorAll('.element__like');
let popup=document.querySelector('.popup');
let profile_name_field = document.querySelector('#profile__name');
let profile__name = document.querySelector('.profile__name');
let profile_description_field = document.querySelector('#profile__description');
let profile_description = document.querySelector('.profile__description');
let form = document.querySelector('.popup__container');



function ShowPopup() {
    popup.classList.add('popup_opened');
    profile_name_field.setAttribute('value', profile__name.textContent);
    profile_description_field.setAttribute('value', profile_description.textContent);
} 
edit_button.addEventListener('click', ShowPopup); 

function ClosePopup(evt) {
    evt.preventDefault();
    popup.classList.remove('popup_opened');
}
close_button.addEventListener('click', ClosePopup); 

function SaveInfo(evt) {
    evt.preventDefault();
    profile__name.textContent = profile_name_field.value;
    profile_description.textContent = profile_description_field.value;
    
}
function SavePopup(){
    form.addEventListener('submit', SaveInfo); 
    popup.classList.remove('popup_opened');
    
}
save_button.addEventListener('click', SavePopup); 



for (let i = 0; i < like_buttons.length; i = i + 1){
    let like_button = like_buttons[i];
    like_buttons[i].addEventListener('click', function(){
        if(like_button.classList.contains('element__like_active')){
            like_button.classList.remove('element__like_active');
        }
        else{
            like_button.classList.add('element__like_active');
        }
    });
} 

