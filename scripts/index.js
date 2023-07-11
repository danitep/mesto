const edit_button = document.querySelector('.profile__edit');
const add_button = document.querySelector('.profile__add');
const close_buttons = document.querySelectorAll('.popup__close');
let profile_name = document.querySelector('.profile__name');
let profile_description = document.querySelector('.profile__description');
const forms = document.querySelectorAll('.popup__container');
let elements = document.querySelector('.elements__grid');
const image_element = document.querySelector('#image-template').content.querySelector('.element');

const initial_cards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
initial_cards.forEach(function(card) {
    let element = image_element.cloneNode(true);
    let image = element.querySelector('.element__image');
    let text = element.querySelector('.element__title');
    let image_name = card.name;
    let image_source = card.link;
    image.src = image_source;
    image.alt = 'Загруженное фото: ' + image_name;
    text.textContent = image_name;
    elements.append(element);
});

const like_buttons = document.querySelectorAll('.element__like');
const delete_buttons = document.querySelectorAll('.element__delete');
const images = document.querySelectorAll('.elements__grid .element__image')

forms.forEach(function(form){
    form.addEventListener('submit', SaveInfo);
});
close_buttons.forEach(function(close_button){
    close_button.addEventListener('click', ClosePopup); 
});
delete_buttons.forEach(function(delete_button){
    delete_button.addEventListener('click', RemoveCard);
})
like_buttons.forEach(function(like_button){
    like_button.addEventListener('click', Like);
})
images.forEach(function(image){
    image.addEventListener('click', ShowPopup);
})
edit_button.addEventListener('click', ShowPopup); 
add_button.addEventListener('click', ShowPopup);


function Like(evt){
    evt.target.classList.toggle('element__like_active');
}

function RemoveCard(evt){
    evt.target.parentElement.remove();
}

function ShowPopup(evt) {
    let popup_selector = evt.target.classList.value;
    let popup;
    if (popup_selector === 'profile__edit'){
        popup = document.querySelector('#account-change');
        let fields = popup.querySelectorAll('.popup__field');
        console.log(fields);
        fields[0].value = profile_name.textContent;
        fields[1].value = profile_description.textContent;
    }
    else if(popup_selector === 'profile__add'){
        popup = document.querySelector('#image-load');
    }
    else if(popup_selector === 'element__image'){
        popup = document.querySelector('#image-show');
        image = popup.querySelector('.popup__image');
        text = popup.querySelector('.popup__text');
        image.src = evt.target.src;
        const name = evt.target.parentElement.querySelector('.element__title').textContent;
        image.alt = 'Загруженное фото: ' + name;
        text.textContent = name; 
    }
    popup.classList.add('popup_opened');
    
} 


function ClosePopup(evt) {
    evt.preventDefault();
    let popup = evt.target.parentElement.parentElement;
    popup.classList.remove('popup_opened');
}


function SaveInfo(evt) {
    evt.preventDefault();
    const popup = evt.target.parentElement.parentElement;
    if (popup.id === 'account-change'){
        const fields = popup.querySelectorAll('.popup__field');
        profile_name.textContent = fields[0].value;
        profile_description.textContent = fields[1].value;
    }
    else if(popup.id === 'image-load'){
        let element = image_element.cloneNode(true);
        const fields = popup.querySelectorAll('.popup__field');
        let image = element.querySelector('.element__image');
        let text = element.querySelector('.element__title');
        const image_name = fields[0].value;
        const image_source = fields[1].value;
        image.src = image_source;
        image.alt = 'Загруженное фото: ' + image_name;
        text.textContent = image_name;
        elements.prepend(element);
        const delete_button = element.querySelector('.element__delete');
        const like_button = element.querySelector('.element__like');
        image.addEventListener('click', ShowPopup);
        delete_button.addEventListener('click', RemoveCard);
        like_button.addEventListener('click', Like);
    }
    ClosePopup(evt);
}


