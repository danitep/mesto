export default class UserInfo{
    constructor(nameSelector, descriptionSelector, avatarSelector){
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
        this._avatarSelector =avatarSelector;
        this._nameField = document.querySelector(this._nameSelector);
        this._descriptionField = document.querySelector(this._descriptionSelector);
        this._avatar = document.querySelector(this._avatarSelector);
    }
    getUserInfo(){
        const userAbout = {
            name: this._nameField.textContent,
            description: this._descriptionField.textContent
        }
        return userAbout;
    }
    setUserInfo(name, description){
        this._nameField.textContent = name;
        this._descriptionField.textContent = description;
    }
    setAvatar(avatarUrl){
        this._avatar.src = avatarUrl;
    }
}