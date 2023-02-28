import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery");


const finalGallery = galleryItems => {

const allImagesArray = galleryItems.reduce(
  (acc, image) => acc + `<li>
     <a class="gallery__item" href="${image.original}" >
       <img class="gallery__image" src="${image.preview}" alt="${image.description}">
     </a>
     </li>
   `,
  "");
  list.insertAdjacentHTML('beforeend', allImagesArray);
};
  
finalGallery(galleryItems);


let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,

});


console.log(galleryItems);


