import axios from "axios";

import { KEY_TO_API } from '../../main';

// Add default value of a current page 'page='
let currentPage = 1;

// Add asynchronous function
export async function fetchGallery(term) {
    // Add URL to Pixabay
    // Parts URL
    const frontURL = 'https://pixabay.com/api/?key=';
    const betweenURL = '&q=';
    // Add per_page=40 for change default value of quantity items in response
    const backURL = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=';
    // Complete URL
    const url = frontURL + KEY_TO_API + betweenURL + term + backURL + currentPage;
  
    const response = await axios(url);
    const images = await response.data;
    
    // Change page of response
    currentPage += 1;
    console.log(images);
    return images;
}

// Function for rest a page by new search
export function restartPage() {
  currentPage = 1;
}