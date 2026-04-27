let images = [
  "https://i.pinimg.com/736x/47/d3/7a/47d37aca5580b8e62f98821db9dc2641.jpg",
  "https://i.pinimg.com/736x/cd/cb/4e/cdcb4e601904e59154791b755525956e.jpg",
  "https://i.pinimg.com/736x/39/b3/99/39b3999ea5961a40c003da8791049780.jpg",
  "https://i.pinimg.com/1200x/9b/2b/f1/9b2bf1d3dba75bed527e79664b7d3864.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox").style.display = "flex";
  showImage();
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function showImage() {
  document.getElementById("lightbox-img").src = images[currentIndex];
}

function changeImage(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  showImage();
}