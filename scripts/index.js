const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const closeButtons = document.querySelectorAll('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const forms = document.querySelectorAll('.popup__container');
const editForm = document.querySelector('#edit_form');
const addForm = document.querySelector('#add_form');
const elements = document.querySelector('.elements__grid');
const imageElement = document.querySelector('#image-template').content.querySelector('.element');

const initialCards = [
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
initialCards.forEach(function(card) {
    const element = imageElement.cloneNode(true);
    const image = element.querySelector('.element__image');
    const text = element.querySelector('.element__title');
    const likeButton = element.querySelector('.element__like');
    const deleteButton = element.querySelector('.element__delete');
    const imageName = card.name;
    const imageSource = card.link;
    image.src = imageSource;
    image.alt = 'Загруженное фото: ' + imageName;
    text.textContent = imageName;
    elements.append(element);
    image.addEventListener('click', showImagePopup);
    likeButton.addEventListener('click', likeToggle);
    deleteButton.addEventListener('click', removeCard);
});

const likeButtons = document.querySelectorAll('.element__like');
const deleteButtons = document.querySelectorAll('.element__delete');



editForm.addEventListener('submit',saveEditFormInfo);
addForm.addEventListener('submit', saveAddFormInfo);

closeButtons.forEach(function(closeButton){
    closeButton.addEventListener('click', closeButtonClick); 
});


editButton.addEventListener('click', showEditPopup); 
addButton.addEventListener('click', showAddPopup);


function likeToggle(evt){
    evt.target.classList.toggle('element__like_active');
}

function removeCard(evt){
    evt.target.closest('.element').remove();
}




function showEditPopup(){
    const popup = document.querySelector('#account-change');
    let fields = popup.querySelectorAll('.popup__field');
    fields[0].value = profileName.textContent;
    fields[1].value = profileDescription.textContent;
    openPopup(popup);
}

function showAddPopup(){
    const popup = document.querySelector('#image-load');
    openPopup(popup);
}

function showImagePopup(evt){
    const popup = document.querySelector('#image-show');
    image = popup.querySelector('.popup__image');
    text = popup.querySelector('.popup__text');
    image.src = evt.target.src;
    const name = evt.target.closest('.element').querySelector('.element__title').textContent;
    image.alt = 'Загруженное фото: ' + name;
    text.textContent = name; 
    openPopup(popup);
}



function openPopup(popup){
    popup.classList.add('popup_opened'); 
}

function closeButtonClick(evt){
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    closePopup(popup);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}



function saveEditFormInfo(evt){
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    const fields = popup.querySelectorAll('.popup__field');
    profileName.textContent = fields[0].value;
    profileDescription.textContent = fields[1].value;
    closePopup(popup);
}
function saveAddFormInfo(evt){
    evt.preventDefault();
    const popup = evt.target.closest('.popup');
    const element = imageElement.cloneNode(true);
    const fields = popup.querySelectorAll('.popup__field');
    const image = element.querySelector('.element__image');
    const text = element.querySelector('.element__title');
    const imageName = fields[0].value;
    const imageSource = fields[1].value;
    fields.forEach(function(field){
        field.value = '';
    });
    image.src = imageSource;
    image.alt = 'Загруженное фото: ' + imageName;
    text.textContent = imageName;
    elements.prepend(element);
    const deleteButton = element.querySelector('.element__delete');
    const likeButton = element.querySelector('.element__like');
    image.addEventListener('click', showImagePopup);
    deleteButton.addEventListener('click', removeCard);
    likeButton.addEventListener('click', likeToggle);
    closePopup(popup);
}

