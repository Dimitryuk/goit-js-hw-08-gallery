const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// получаем доступ к элементам

const modalWindowRefs = {
  lightboxRef: document.querySelector(".lightbox"),
  lightboxOverlayRef: document.querySelector(".lightbox__overlay"),
  lightboxImageRef: document.querySelector(".lightbox__image"),
  lightboxContentRef: document.querySelector(".lightbox__content"),
  lightboxButtonCloseRef: document.querySelector(".lightbox__button"),
  galleryRef: document.querySelector(".js-gallery"),
};

console.log(modalWindowRefs.galleryRef);

//Создаем элементы коллекции

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /> </a> </li>`
  )
  .join("");

modalWindowRefs.galleryRef.innerHTML = galleryMarkup;

//console.log(galleryMarkup);

//вешаем события, функция для открытия модалки

modalWindowRefs.galleryRef.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName !== "IMG") return;

  onModalOpen();
}
function onModalOpen() {
  modalWindowRefs.lightboxRef.classList.add("is-open");
  modalWindowRefs.lightboxImageRef.src =
    event.target.getAttribute("data-source");
  modalWindowRefs.lightboxImageRef.alt = event.target.getAttribute("alt");
}

// закрытие модалки по кнопке
modalWindowRefs.lightboxButtonCloseRef.addEventListener("click", onModalClose);

function onModalClose(event) {
  modalWindowRefs.lightboxRef.classList.remove("is-open");
}

// Закрытие по клику на оверлей
modalWindowRefs.lightboxOverlayRef.addEventListener("click", onOverlayClick);

function onOverlayClick() {
  modalWindowRefs.lightboxRef.classList.remove("is-open");
}

//Закрытие модалки по нажатию на Эскейп
window.addEventListener("keydown", onEscPressClose);
function onEscPressClose(event) {
  modalWindowRefs.lightboxRef.classList.remove("is-open");
}
