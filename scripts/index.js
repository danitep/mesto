//buttons
const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add');
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
const popupList = Array.from(document.querySelectorAll('.popup'));

//otherElements
const elements = document.querySelector('.elements__grid');
const imageElement = document.querySelector('#image-template').content.querySelector('.element');
const imageForShow = popupImageShow.querySelector('.popup__image');
const textForShow = popupImageShow.querySelector('.popup__text');



//mainCode
initialCards.forEach(function(card) {
    elements.append(createCard(card.name, card.link));
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


function likeToggle(evt){
    evt.target.classList.toggle('element__like_active');
}

function createCard(imageName, imageSource){
  const element = imageElement.cloneNode(true);
  const image = element.querySelector('.element__image');
  const text = element.querySelector('.element__title');
  image.src = imageSource;
  image.alt = `${imageName}`;
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
    imageForShow.alt = `${name}`;
    textForShow.textContent = name; 
    openPopup(popupImageShow);
}



function openPopup(popup){
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
    const buttonElement = editForm.querySelector('.popup__button');
    offButton(selectorList, buttonElement);
    closePopup(popupAccountChange);
}

function saveAddFormInfo(evt){
    evt.preventDefault();
    const imageName = placeNameField.value;
    const imageSource = placeImageField.value;
    addForm.reset();
    const element = createCard(imageName, imageSource);
    elements.prepend(element);
    const buttonElement =addForm.querySelector('.popup__button');
    offButton(selectorList, buttonElement);
    closePopup(popupImageLoad);
}
