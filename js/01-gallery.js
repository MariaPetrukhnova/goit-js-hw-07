import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItem = createGalleryGrid(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
const itemsLinks = document.querySelectorAll('.gallery__link');

function createGalleryGrid(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `;
    })
    .join('');
}

itemsLinks.forEach(link =>
    link.addEventListener('click', (event) => {
    event.preventDefault();
}));

galleryContainer.addEventListener('click', onImgClick);
galleryContainer.addEventListener('keydown', onEscKeyPress);

function onImgClick(event) {
    if (!event.target.classList.contains("gallery__image")) return;
    const bigImg = basicLightbox.create(`
		<img class="bigImg" width="1400" height="900" src="${event.target.dataset.source}">
	`).show();
    onEscKeyPress();
}


function onEscKeyPress(event) {
    if (event?.code !== 'Escape') return;

    const modal = document.querySelector('.basicLightbox');
    modal.remove();
}