<<<<<<< HEAD
export function openPopup(popup){
    popup.classList.add('popup_opened');
    enableEscapeListener();
}

export function enableEscapeListener(){
    document.addEventListener('keydown', keyHandler)
}

export function keyHandler(evt){
    if (evt.key === "Escape"){
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    disableEscapeListener();
}

export function disableEscapeListener(){
    document.removeEventListener('keydown', keyHandler)
=======
export function openPopup(popup){
    popup.classList.add('popup_opened');
    enableEscapeListener();
}

export function enableEscapeListener(){
    document.addEventListener('keydown', keyHandler)
}

export function keyHandler(evt){
    if (evt.key === "Escape"){
        const popup = document.querySelector(".popup_opened");
        closePopup(popup);
    }
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    disableEscapeListener();
}

export function disableEscapeListener(){
    document.removeEventListener('keydown', keyHandler)
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
}