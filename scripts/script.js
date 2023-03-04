let page = document.querySelector('.page'); //вся страница
let popupContainer = page.querySelector('.popup__container'); //блок попап контейнер
let profileEditButton = page.querySelector('.profile__edit-button');
let popupCloseIcon = popupContainer.querySelector('.popup__close-icon');
let profileName = page.querySelector('.profile__name');
let profilePersonalInfo = page.querySelector('.profile__personal-info');
let popupName = popupContainer.querySelector('.popup__name');
let popupPersonalInfo = popupContainer.querySelector('.popup__personal-info');
let popup = page.querySelector('.popup');

function openEdit () {
  popupContainer.classList.add('popup_opened'); //добавляем класс
  popupName.setAttribute('placeholder', `${profileName.textContent}`);
  popupPersonalInfo.setAttribute('placeholder', `${profilePersonalInfo.textContent}`);
}

function closeEdit () {
  popupContainer.classList.remove('popup_opened');  //убираем класс
}


function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePersonalInfo.textContent = popupPersonalInfo.value;
  closeEdit();
}



profileEditButton.addEventListener('click', openEdit); //при клике открывается
popupCloseIcon.addEventListener('click', closeEdit); //при клике закрывается
popup.addEventListener('submit', handleFormSubmit); //заменила на попап

