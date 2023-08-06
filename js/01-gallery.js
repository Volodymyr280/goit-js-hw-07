import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const imageList = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__img"
    src="${preview}"
     alt="${description}"
    data-source="${original}"
   width="340"
    />
    </a>
    </li> `).join('');
}

imageList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
imageList.addEventListener('click', handlerClick);
function handlerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__img')) {
    return;
  }
  const picture = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${picture}" >`);
  instance.show();
  imageList.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      instance.close();
    }
  });
}