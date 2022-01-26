// Get Elements
const imageContainer = document.getElementById("image-container");
const imageLoader = document.getElementById("image-loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "YQJH2cAXsTr2SYCvJ-s1z4NKdBAxQZ08eSj78Yq_QB8";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements for links and photos, Add to DOM
function displayPhotos() {
  // Run function for each photosArray
  photosArray.forEach((photo) => {
    // Create <a> element to link to Unsplash, Set attributes
    const item = document.createElement("a");
    // item.setAttribute("href", photo.links.html);
    // item.setAttribute("target", "_blank");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    // Create <img> per photo, Set attributes
    const img = document.createElement("img");
    // img.setAttribute("src", photo.urls.regular);
    // img.setAttribute("alt", photo.alt_description);
    // img.setAttribute("title", photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Put <img> inside the <a> element, Then put both inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // catch error
    console.log(error);
  }
}

// On Load
getPhotos();
