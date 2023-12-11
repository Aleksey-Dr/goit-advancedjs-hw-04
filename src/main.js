import axios from "axios";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
// Add default value of a current page 'page='
export let currentPage = 1;

// ========== listeners
// listeners by "submit" for form wiht function fetchImages(term) in callback
refs.searchForm.addEventListener('submit', searchImages);
// listeners by "click" for button "Load more" wiht function onLoadMore() in callback
refs.loadMoreBtn.addEventListener('click', onLoadMore);

// ========== function searchImages
async function searchImages(evt) {
    refs.loadMoreBtn.classList.add('is-hidden');
    // stop reboot page
    evt.preventDefault();
    // clear gallary by submit
    clearGallery();
    // constant for a inputed term (for serach images)
    // add method trim()
    const termImages = evt.currentTarget.elements.searchQuery.value.trim();
    // console.log(termImages);
    // check a content of input and show notification
    if (termImages.trim() === '') {
      iziToast.show({
        backgroundColor: 'lightyellow',
        message: `Empty string`,
        timeout: 3000,
        position: 'topRight',
        transitionIn: 'flipInX',
        transitionOut: 'flipOutX',
      });
      return;
    }
    
    if (valueTermImages !== termImages) {
        // function for reset page by new termImages
        restartPage();
    }
    valueTermImages = termImages;
    currentPage = 1;

    try {
      const gallery = await fetchGallery(termImages, currentPage);
      renderCards(gallery);
    } catch (error) {
        console.log(error);
    };
};

function clearGallery() {
    refs.galleryImages.innerHTML = '';
}

async function onLoadMore() {
    // change page of response
    currentPage += 1;
    try {
      const gallery = await fetchGallery(valueTermImages, currentPage);
      renderCards(gallery);
    } catch (error) {
      console.log(error);
    };
};