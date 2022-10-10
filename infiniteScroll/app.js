const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'rV3_zQBZW9xT6_ICLyzbEFv0x5K2gSaJLsy0NKQ4lhQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper funtion to set attributes on DOM Elements

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// create elements for links and photos, Add to DOM

function displayPhotos() {
  photosArray.forEach((photo) => {
    // create ancor element to link to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // create <img> for photo
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
// Get Photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch error here
  }
}

// checkt to see if scrolling near bottom of page, load more photos
window.addEventListener('scroll', () => {
  console.log('scrolled');
});

// on load
getPhotos();
