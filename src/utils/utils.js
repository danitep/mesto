import Card from '../components/Card.js'
import PopupWithImage from '../components/PopupWithImage.js';

export const createCardObject = (popupImageInfo)=>{
    const card = new Card({
        data: popupImageInfo.cardInfo,
        handleCardClick:(evt)=>{
            const imageInfo = {
                name: evt.target.closest('.element').querySelector('.element__title').textContent,
                src: evt.target.src
            }
            popupImageInfo.popup.open(imageInfo);
        }
    }, 
    popupImageInfo.templateSelector);
    return card;
}