import Card from '../components/Card.js'
import PopupWithImage from '../components/PopupWithImage.js';

export const createCardObject = (popupImageInfo)=>{
    const card = new Card({
        data: popupImageInfo.cardInfo,
        handleCardClick:(name, link)=>{
            const imageInfo = {
                name: name,
                src: link
            }
            popupImageInfo.popup.open(imageInfo);
        }
    }, 
    popupImageInfo.templateSelector);
    return card;
}