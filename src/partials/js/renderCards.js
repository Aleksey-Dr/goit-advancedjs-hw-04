import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../../main';

const lightbox = new SimpleLightbox('.gallery a');

// Add function for rendering markup when found images
export function renderCards(images) {
  // Test by empty
  if (images.totalHits !== 0) {
    const markup = images.hits
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
                  <a href="${largeImageURL}">
                    <img src="${webformatURL}" alt="${tags}" loading="lazy"/>
                    <div class="info">
                      <p class="info-item">
                        <b>Likes</b>
                        ${likes}
                      </p>
                      <p class="info-item">
                        <b>Views</b>
                        ${views}
                      </p>
                      <p class="info-item">
                        <b>Comments</b>
                        ${comments}
                      </p>
                      <p class="info-item">
                        <b>Downloads</b>
                        ${downloads}
                      </p>
                    </div>
                  </a>
                </div>`;
      })
      .join('');
    refs.galleryImages.insertAdjacentHTML('beforeend', markup);
    refs.loadMoreBtn.classList.remove('is-hidden');
    lightbox.refresh();
    iziToast.show({
      backgroundColor: 'lightgreen',
      message: `Hooray! We found ${images.totalHits} images.`,
      timeout: 3000,
      position: 'topRight',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
    });
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
    iziToast.show({
      backgroundColor: '#FD4A3F',
      message:
        'Sorry, there are no images matching your search query. Please try again.',
      timeout: 3000,
      position: 'topRight',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
    });
  }
};