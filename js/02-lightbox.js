import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItem = createGalleryGrid(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItem);
const itemsLinks = document.querySelectorAll('.gallery__item');
const imgItem = document.querySelector('.gallery__image')


function createGalleryGrid(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
        </li>
        `;
    })
    .join('');
}

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();
})

const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
});

