const selectorList = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

function showInputError(selectorList, formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//span ошибки
    inputElement.classList.add(selectorList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectorList.errorClass);
}

function hideInputError(selectorList, formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//span ошибки
    inputElement.classList.remove(selectorList.inputErrorClass);
    errorElement.classList.remove(selectorList.errorClass);
    errorElement.textContent = "errortext";
}

function checkInputValidity(selectorList, formElement, inputElement) {
    if (!inputElement.validity.valid) {
        showInputError(
            selectorList,
            formElement,
            inputElement,
            inputElement.validationMessage
        );
    } else {
        hideInputError(selectorList, formElement, inputElement);
    }
}

function hasInvalidInput(inputList){
    return inputList.some(function(input){
        return !(input.validity.valid);
    });
}

function toggleButtonState(selectorList, inputList, buttonElement){
    if (hasInvalidInput(inputList)){
        buttonElement.classList.add(selectorList.inactiveButtonClass);
        buttonElement.setAttribute("disabled", true);
    }
    else{
        buttonElement.classList.remove(selectorList.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
    }
}

function offButton(selectorList, buttonElement){
    buttonElement.classList.add(selectorList.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
}

function setEventListeners(selectorList, formElement) {
    const inputList = Array.from(
        formElement.querySelectorAll(selectorList.inputSelector)
    );
    const buttonElement = formElement.querySelector(selectorList.submitButtonSelector);
    toggleButtonState(selectorList, inputList, buttonElement);
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
            checkInputValidity(selectorList, formElement, inputElement);
            toggleButtonState(selectorList, inputList, buttonElement);
        });
    });
}

function enableValidation(selectorList) {
    const formList = Array.from(
        document.querySelectorAll(selectorList.formSelector)
    );
    formList.forEach(function (formElement) {
        setEventListeners(selectorList, formElement);
    });
}

enableValidation(selectorList);
