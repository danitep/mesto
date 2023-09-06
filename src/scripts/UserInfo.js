<<<<<<< HEAD
export default class UserInfo{
    constructor(nameSelector, descriptionSelector){
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
        this._nameField = document.querySelector(this._nameSelector);
        this._descriptionField = document.querySelector(this._descriptionSelector)
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
=======
export default class UserInfo{
    constructor(nameSelector, descriptionSelector){
        this._nameSelector = nameSelector;
        this._descriptionSelector = descriptionSelector;
        this._nameField = document.querySelector(this._nameSelector);
        this._descriptionField = document.querySelector(this._descriptionSelector)
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
>>>>>>> 31c43c63a8bce379037f5cb78baf8313db936ddb
}