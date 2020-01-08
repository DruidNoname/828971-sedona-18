var myForm = document.querySelector('.interview__form');
var modalBack = document.querySelector('.modal__wrapper');
var popup = document.querySelector('.modal__white');

myForm.onsubmit = function(evt) {
  // Инструкция ниже отменяет отправку данных
  evt.preventDefault();

    // function(modalSuccess) {
    //   modalBack.classList.add("page-header__active_flexbox");
    //   popup.classList.add("page-header__active");
    // }
    // modalSuccess();
};
