let currentIndex = 0;
let images = [];

function openLightbox(clickedImg) {
  images = Array.from(document.querySelectorAll(".gallery-img"))
    .filter(img => img.style.display !== "none");

  currentIndex = images.indexOf(clickedImg);
  document.getElementById("lightbox-img").src = clickedImg.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery-img");

  allImages.forEach(img => {
    if (category === "all" || img.classList.contains(category)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
