//buttons
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
const closeButtons = document.querySelectorAll('.popup__close');
const likeButtons = document.querySelectorAll('.element__like');
const deleteButtons = document.querySelectorAll('.element__delete');

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
const popupImageShow = document.querySelector('#image-show');

//otherElements
const elements = document.querySelector('.elements__grid');
const imageElement = document.querySelector('#image-template').content.querySelector('.element');
const imageForShow = popupImageShow.querySelector('.popup__image');
const textForShow = popupImageShow.querySelector('.popup__text');
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


//mainCode
initialCards.forEach(function(card) {
    elements.append(createCard(card.name, card.link));
});

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

function createCard(imageName, imageSource){
  const element = imageElement.cloneNode(true);
  const image = element.querySelector('.element__image');
  const text = element.querySelector('.element__title');
  image.src = imageSource;
  image.alt = 'Загруженное фото: ' + imageName;
  text.textContent = imageName;
  const deleteButton = element.querySelector('.element__delete');
  const likeButton = element.querySelector('.element__like');
  image.addEventListener('click', showImagePopup);
  deleteButton.addEventListener('click', removeCard);
  likeButton.addEventListener('click', likeToggle);
  return element;
}

function removeCard(evt){
    evt.target.closest('.element').remove();
}


function showEditPopup(){
    profileNameField.value = profileName.textContent;
    profileDescriptionField.value = profileDescription.textContent;
    openPopup(popupAccountChange);
}

function showAddPopup(){
    openPopup(popupImageLoad);
}

function showImagePopup(evt){
    imageForShow.src = evt.target.src;
    const name = evt.target.closest('.element').querySelector('.element__title').textContent;
    imageForShow.alt = 'Загруженное фото: ' + name;
    textForShow.textContent = name; 
    openPopup(popupImageShow);
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
    profileName.textContent = profileNameField.value;
    profileDescription.textContent = profileDescriptionField.value;
    closePopup(popupAccountChange);
}

function saveAddFormInfo(evt){
    evt.preventDefault();
    const imageName = placeNameField.value;
    const imageSource = placeImageField.value;
    addForm.reset();
    const element = createCard(imageName, imageSource);
    elements.prepend(element);
    closePopup(popupImageLoad);
}
