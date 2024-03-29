export default class FormValidator{
    constructor(selectorList, form){
        this._selectorList = selectorList;
        this._element = form;
        this._inputList = Array.from(
            this._element.querySelectorAll(this._selectorList.inputSelector)
        );
        this._buttonElement = this._element.querySelector(this._selectorList.submitButtonSelector);
    }
    enableValidation(){
        this._setEventListeners();
    }

    _setEventListeners() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        })
        this._element.addEventListener("submit", () => {
            this._offButton();
        });
    }

    _toggleButtonState(){
        if (this._hasInvalidInput()){
            this._offButton();
        }
        else{
            this._buttonElement.classList.remove(this._selectorList.inactiveButtonClass);
            this._buttonElement.removeAttribute("disabled");
        }
    }

    _hasInvalidInput(){
        if (this._inputList.length == 0){
            return false;
        }
        return this._inputList.some(function(input){
            return !(input.validity.valid);
        });
    }

    _offButton(){
        if (this._inputList.length !== 0){
            this._buttonElement.classList.add(this._selectorList.inactiveButtonClass);
            this._buttonElement.setAttribute("disabled", true);
        }
    }
    
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _showInputError(inputElement) {
        const errorElement = this._element.querySelector(`#${inputElement.id}-error`);//span ошибки
        inputElement.classList.add(this._selectorList.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._selectorList.errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._element.querySelector(`#${inputElement.id}-error`);//span ошибки
        inputElement.classList.remove(this._selectorList.inputErrorClass);
        errorElement.classList.remove(this._selectorList.errorClass);
        errorElement.textContent = "errortext";
    }
}
