import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galeryElements = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`
  )
  .join("");
const ulEl = document.querySelector(".gallery");
ulEl.insertAdjacentHTML("afterbegin", galeryElements);

const br = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  doubleTapZoom: 2,
  scrollZoom: false,
});
