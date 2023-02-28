import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");
//list.classList.replace("gallery", "gallery__item")

const finalGallery = galleryItems => {
 
const allImagesArray = galleryItems.reduce(
  (acc, image) => acc + `
     <a class="gallery__link" href="${image.original}" >
       <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}">
     </a>
   `,
  "");
  list.insertAdjacentHTML('beforeend', allImagesArray);
};
  
finalGallery(galleryItems);

 
list.addEventListener('click', modalWindow);

function modalWindow(event) {
  event.preventDefault(); 
    if (event.target.nodeName !== 'IMG') {
        return;
    };
  const fullScreen = event.target.dataset.source;
  const description = event.target.alt;
  console.log(fullScreen);
  console.log(description);
     const instance = basicLightbox.create(`
       <div class="modal">
            <img src=${fullScreen} alt=${description}>
       </div>
      `, {
       onShow: (instance) => { 
       window.addEventListener("keydown", onEscKeyPress); 
         },
       onClose: (instance) => { 
       window.removeEventListener("keydown", onEscKeyPress); 
         }, 
      })
    instance.show();
    function onEscKeyPress(event) { 
     if (event.code !== "Escape") {
       return;
      };
      instance.close();
  };
};







