let page = document.querySelector('.page'); //вся страница
let popup = page.querySelector('.popup'); //блок попап контейнер
let profileEditButton = page.querySelector('.profile__edit-button');
let popupCloseIcon = popup.querySelector('.popup__close-icon');
let profileName = page.querySelector('.profile__name');
let profilePersonalInfo = page.querySelector('.profile__personal-info');
let popupName = popup.querySelector('.popup__input_type_name');
let popupPersonalInfo = popup.querySelector('.popup__input_type_info');
let popupForm = page.querySelector('.popup__form');  //popup

function openEdit () {
  popup.classList.add('popup_opened');
  popupName.setAttribute('value', `${profileName.textContent}`);
  popupPersonalInfo.setAttribute('value', `${profilePersonalInfo.textContent}`);
}

function closeEdit () {
  popup.classList.remove('popup_opened');
}


function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePersonalInfo.textContent = popupPersonalInfo.value;
  closeEdit();
}



profileEditButton.addEventListener('click', openEdit);
popupCloseIcon.addEventListener('click', closeEdit);
popupForm.addEventListener('submit', handleFormSubmit);

