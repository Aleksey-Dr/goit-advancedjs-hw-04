// Import styles
import './css/styles.css';
// Import fetchGallery
import { fetchGallery, restartPage } from './partials/js/fetchGallery.js';
import { renderCards } from './partials/js/renderCards.js';

// Add/find elements from html
// Create object with elements
export const refs = {
    searchForm: document.querySelector('.search-form'),
    galleryImages: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
};

// Add class to the element loadMoreBtn for hiddening
refs.loadMoreBtn.classList.add('is-hidden');

// Personal key for Pixabay API
export const KEY_TO_API = '35129314-12d9f6cafbe4df38ad9bc5f6b';

// Add default value
let valueTermImages = '';

// ========== listeners
// Add listeners by "submit" for form wiht function fetchImages(term) in callback
refs.searchForm.addEventListener('submit', searchImages);
// Add listeners by "click" for button "Load more" wiht function onLoadMore() in callback
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// ========== function searchImages
function searchImages(evt) {
    refs.loadMoreBtn.classList.add('is-hidden');
    // stop reboot page
    evt.preventDefault();
    // Add clear gallary by submit
    clearGallery();
    // Constant for a inputed term (for serach images)
    // Add method trim()
    const termImages = evt.currentTarget.elements.searchQuery.value.trim();
    console.log(termImages);
    
    if (valueTermImages !== termImages) {
        // Add function for reset page by new termImages
        restartPage();
    }
    valueTermImages = termImages;

    fetchGallery(termImages)
        .then(renderCards)
        .catch(error => console.log(error));
}

function onLoadMore() {
  fetchGallery(valueTermImages).then(renderCards);
}

function clearGallery() {
  refs.galleryImages.innerHTML = '';
}