import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// масив зображень
const images = [
  {
    preview: "https://via.placeholder.com/150",
    original: "https://via.placeholder.com/600",
    description: "Image 1"
  },
  {
    preview: "https://via.placeholder.com/150/0000FF",
    original: "https://via.placeholder.com/600/0000FF",
    description: "Image 2"
  },
  {
    preview: "https://via.placeholder.com/150/FF0000",
    original: "https://via.placeholder.com/600/FF0000",
    description: "Image 3"
  }
];

const gallery = document.querySelector(".gallery");

// створення розмітки
const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img 
      class="gallery-image" 
      src="${preview}" 
      alt="${description}" 
    />
  </a>
</li>`
  )
  .join("");

gallery.innerHTML = markup;

// ініціалізація бібліотеки
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});