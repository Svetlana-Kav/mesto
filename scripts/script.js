const page = document.querySelector('.page');
const elementsBlock = page.querySelector('.elements');
const popup = page.querySelector('.popup');
const profileEditButton = page.querySelector('.profile__edit-button');
const popupCloseIcon = popup.querySelector('.popup__close-icon');
const profileName = page.querySelector('.profile__name');
const profilePersonalInfo = page.querySelector('.profile__personal-info');
const popupName = popup.querySelector('.popup__input_type_name');
const popupPersonalInfo = popup.querySelector('.popup__input_type_info');
const popupForm = page.querySelector('.popup__form');
const popupNameCard = page.querySelector('.popup__input_type_name-card');
const popupLinkImage = page.querySelector('.popup__input_type_link-image');
const popupAddCardForm = page.querySelector('.form__add-card');
const profileAddButton = page.querySelector('.profile__add-button');
const popupEditProfile = page.querySelector('.popup_type_edit-profie');
const popupAddCard = page.querySelector('.popup_type_add-card');
const popupCloseIconAddCard = page.querySelector('.popup__close-icon_type_add-card');
const popupCloseIconPhotoViewer = page.querySelector('.popup__close-icon_type_photo-viewer');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openEdit () {
  popupEditProfile.classList.add('popup_opened');
  popupName.setAttribute('value', `${profileName.textContent}`);
  popupPersonalInfo.setAttribute('value', `${profilePersonalInfo.textContent}`);
}

function closePopup () {
  popupEditProfile.classList.remove('popup_opened');
}


function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profilePersonalInfo.textContent = popupPersonalInfo.value;
  closePopup();
}



profileEditButton.addEventListener('click', openEdit);
popupCloseIcon.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);


function addCard(card) {
  const newCard = document.querySelector('#card-template').content.cloneNode(true);
  const cardText = newCard.querySelector('.element__text');
  cardText.textContent = card.name;

  const cardImage = newCard.querySelector('.element__image');
  cardImage.setAttribute('src', card.link);
  cardImage.setAttribute('alt',`Фотография ${card.name}.` );
  const deleteButtonCard = newCard.querySelector('.element__delete-button');
  deleteButtonCard.addEventListener('click', handleDeleteButtonClick);
  const cardLikeButton = newCard.querySelector('.element__like-button');
  cardLikeButton.addEventListener('click', activeLikeButtonClick);
  cardImage.addEventListener('click', openPhotoViewer);
  elementsBlock.prepend(newCard);
}


initialCards.forEach(addCard);

function handleDeleteButtonClick(evt) {
  const button = evt.target;
  const card = button.closest('.element');
  card.remove();
}

function activeLikeButtonClick(evt) {
  const button = evt.target;
  button.classList.toggle('element__like-button_active');
}

function openAddCard () {
  popupAddCard.classList.add('popup_opened');
  popupNameCard.value = '';
  popupLinkImage.value = '';
}

function closePopupAddCard () {
  popupAddCard.classList.remove('popup_opened');
}

function handleFormSubmitCard (evt) {
  evt.preventDefault();
  const form = evt.target;
  const name = form.querySelector('.popup__input_type_name-card').value;
  const link = form.querySelector('.popup__input_type_link-image').value;
  const card = { name, link};
  addCard(card);
  closePopupAddCard();
}

profileAddButton.addEventListener('click',openAddCard);
popupAddCardForm.addEventListener('submit',handleFormSubmitCard);
popupCloseIconAddCard.addEventListener('click',closePopupAddCard);

const popupPhotoViewer = page.querySelector('.popup_type_photo-viewer');

function openPhotoViewer(evt) {
  const imageCard = evt.target;
  popupPhotoViewer.classList.add('popup_opened');
  const popapImage = page.querySelector('.popup__image');
  popapImage.setAttribute('src', `${imageCard.src}`);
  const popupNameImage = page.querySelector('.popup__name-image');
  popupNameImage.textContent = imageCard.nextElementSibling.textContent;
}

function closePopupPhotoViewer() {
  popupPhotoViewer.classList.remove('popup_opened');
}

popupCloseIconPhotoViewer.addEventListener('click', closePopupPhotoViewer);

