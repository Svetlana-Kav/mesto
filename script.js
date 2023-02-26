let page = document.querySelector('.page'); //вся страница
let popup = page.querySelector('.popup'); //блок попап
let profileEditButton = page.querySelector('.profile__edit-button');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let profileName = page.querySelector('.profile__name');
let profilePersonalInfo = page.querySelector('.profile__personal-info');
let popupName = popup.querySelector('.popup__name');
let popupPersonalInfo = popup.querySelector('.popup__personal-info');
let popupSubmitButton = popup.querySelector('.popup__submit-button');
let popupContainer = page.querySelector('.popup__container')

function openEdit () {
  popup.classList.add('popup_opened'); //добавляем класс
}

function closeEdit () {
  popup.classList.remove('popup_opened');  //убираем класс
}

popupName.setAttribute('placeholder', `${profileName.textContent}`);
popupPersonalInfo.setAttribute('placeholder', `${profilePersonalInfo.textContent}`);





function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePersonalInfo.textContent = popupPersonalInfo.value;
}



profileEditButton.addEventListener('click', openEdit); //при клике открывается
popupCloseIcon.addEventListener('click', closeEdit); //при клике закрывается
popupContainer.addEventListener('submit', handleFormSubmit);

