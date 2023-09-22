import Card from '../components/Card.js'

export const createCardObject = (popupImageInfo, profileId, api)=>{
    const card = new Card({
        data: popupImageInfo.cardInfo,
        handleCardClick:(name, link)=>{
            const imageInfo = {
                name: name,
                src: link
            }
            popupImageInfo.popup.open(imageInfo);
        },
        handleLikeClick:(isLiked, cardId)=>{
            if(isLiked){
                api.setLike(cardId)
                .then((data)=>{
                    card.setLikeCount(data.likes.length)
                })
            }
            else{
                api.deleteLike(cardId)
                .then((data)=>{
                    card.setLikeCount(data.likes.length)
                })
            }
        },
        popupConfirm: popupImageInfo.popupConfirm,
        profileId: profileId
    }, 
    popupImageInfo.templateSelector);
    return card;
}