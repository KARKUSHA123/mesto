let popupProfile = document.querySelector('.popup_type_profile');
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__icon');
let popupSave = document.querySelector('.popup__button');

editButton.addEventListener('click', openModalWindow);
closeButton.addEventListener('click', closeModalWindow);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__title');
let profileAbout = document.querySelector('.profile__subtitle');

function openModalWindow() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    popupProfile.classList.add('popup_opened');
}

function closeModalWindow() {
    popupProfile.classList.remove('popup_opened');
    popupPhoto.classList.remove('popup_opened');
    popupPlace.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closeModalWindow();
}
formElement.addEventListener('submit', handleFormSubmit);




let popupPlace = document.querySelector('.popup_type_places');
let addButton = document.querySelector('.profile__button-add');
let closeAddButton = document.querySelector('.popup__icon_places');
let popupAddSave = document.querySelector('.popup__button_places');

addButton.addEventListener('click', openPlaceWindow);
closeAddButton.addEventListener('click', closeModalWindow);

let formPlacesElement = document.querySelector('.popup__form_places');
let placeInput = document.querySelector('.popup__input_type_place');
let srcInput = document.querySelector('.popup__input_type_src');

function openPlaceWindow() {
    popupPlace.classList.add('popup_opened');
}

function handleFormSubmitPhoto (evt) {
    evt.preventDefault(); 
    renderCard(placeInput.value, srcInput.value);
    closeModalWindow(popupPlace);
    evt.target.reset();
}



const initialCards = [
    {
      name: 'Тайланд',
      link: 'https://sun9-55.userapi.com/impg/qiMTHfkne4HuJ9aEMJv3WG4Kb_4wBwur3En7Fw/zDKbtwfSe-U.jpg?size=2560x1771&quality=95&sign=16a116826898b4bd20c02dbd55c5d492&type=album'
    },
    {
      name: 'Шотландия',
      link: 'https://sun9-31.userapi.com/impg/LMddb7tFwDtsbkT98xKTlX3DVtQy4Z_HOR1VUA/TfZjamBFR90.jpg?size=2560x1918&quality=95&sign=2704f1fd2dcb50a064d9ae90eba731b2&type=album'
    },
    {
      name: 'США',
      link: 'https://sun9-58.userapi.com/impg/2eaU6ceQEKuKY97disW6scGwhDYz1s3ijkVddQ/jEKwzu_Si5o.jpg?size=1440x2160&quality=95&sign=e9226dddd16afa9cac97e5a40aa830af&type=album'
    },
    {
      name: 'Франция',
      link: 'https://sun7-19.userapi.com/impg/DrDIS21441ONuV1P8Rjuuc1o6JaRdvbcu8XHpw/NQZEKYE_c_g.jpg?size=1600x2000&quality=95&sign=59205c75367308bbe1f7e8adab4bccde&type=album'
    },
      {
      name: 'Россия',
      link: 'https://sun9-1.userapi.com/impg/E9C5vzxtLk-AUKsp3ES4pps9ocVcS4zqwY3K_g/AJDV8YlUYy8.jpg?size=2560x1919&quality=95&sign=441d7f5ec9bdb5339a1d2130a38145e3&type=album'
    },
      {
      name: 'Камбоджа',
      link: 'https://sun9-30.userapi.com/impg/a4zU-luzFVQuER-jO-aGkCbaO2UbUHYq6rd1Sg/8Ecfpc4sQBA.jpg?size=1620x2160&quality=95&sign=c02f95ca76e24321f745d3bb85994d1b&type=album'
    }
  ]; 

const elements = document.querySelector('.elements');
  
function createCard(card) {
   
    
    const newCard = document.querySelector('#elements-template').content.cloneNode(true);
    const cardHeadind = newCard.querySelector('.elements__name');
    cardHeadind.textContent = card.name;
    const cardImage = newCard.querySelector('.elements__image');
    cardImage.setAttribute('src', card.link);
    const deleteButton = newCard.querySelector('.elements__delete');
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    elements.append(newCard);

 
    
    cardImage.addEventListener("click", function () {
       openPhotoWindow(popupPhoto);
       bigImage.src = cardImage.src;
       bigImageHeading.textContent = cardHeadind.textContent;
    });

   
    
    const likeElements = elements.querySelector('.elements__like');
    likeElements.addEventListener('click', function (like) {
       like.target.classList.toggle('elements__like_active');
    });
}
initialCards.forEach(createCard);



const renderCard = () => {
    const newCard = document.querySelector('#elements-template').content.cloneNode(true);
    const cardHeadind = newCard.querySelector('.elements__name');
    cardHeadind.textContent = placeInput.value;
    const cardImage = newCard.querySelector('.elements__image');
    cardImage.setAttribute('src', srcInput.value);
    const deleteButton = newCard.querySelector('.elements__delete');
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    elements.prepend(newCard);


    cardImage.addEventListener("click", function () {
        openPhotoWindow(popupPhoto);
        bigImage.src = cardImage.src;
        bigImageHeading.textContent = cardHeadind.textContent;
    });




    const likeElements = elements.querySelector('.elements__like');
    likeElements.addEventListener('click', function (like) {
       like.target.classList.toggle('elements__like_active');
    });
    return newCard;
}

formPlacesElement.addEventListener('submit', handleFormSubmitPhoto);



function handleDeleteButtonClick(event) {
    const button = event.target;
    const card = button.closest('.elements__element');
    card.remove();
}




const popupPhoto = document.querySelector('.popup_type_photo');
const openPhoto = document.querySelector('.elements__image');
const closePhoto = document.querySelector('.popup__icon_photo');
const bigImage = document.querySelector('.popup__image');
const bigImageHeading = document.querySelector('.popup__photo-about');

openPhoto.addEventListener('click', openPhotoWindow);
closePhoto.addEventListener('click', closeModalWindow);

function openPhotoWindow() {
    popupPhoto.classList.add('popup_opened');
}