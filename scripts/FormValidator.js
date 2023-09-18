import { configValidation } from './constants.js';

class FormValidator {
  constructor(configValidation, formElement) {
      this.configValidation = configValidation;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this.configValidation.inputSelector));
      this._buttonElement = this._formElement.querySelector(this.configValidation.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this.configValidation.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.configValidation.errorClass);
  };
    
  _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this.configValidation.inputErrorClass);
      errorElement.classList.remove(this.configValidation.errorClass);
      errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      };
  };

  _hasInvalidInput() {
      return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this.configValidation.inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
      } else {
        this._buttonElement.classList.remove(this.configValidation.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled', true);
      };
  };

  _setEventListeners() {
      this._toggleButtonState();
    
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
  };

  enableValidation() {
    this._setEventListeners();
};

disabledButton() {
    this._buttonElement.setAttribute('disabled', 'disabled');
    this._buttonElement.classList.add(this.config.inactiveButtonClass);
};

resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
};
}

  export {FormValidator}