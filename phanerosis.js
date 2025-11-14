let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function autoSlides() {
  slideIndex++;              // Move to next slide
  showSlides(slideIndex);    // Show updated slide
  setTimeout(autoSlides, 5000); // Change slide every 5 seconds
}

// Start the automatic slideshow
autoSlides();

/*
//modal js

function openModal() {
  let modal = document.getElementById("imageModal");
  let largeImage = document.getElementById("largeImage");

  // get the image inside the clicked card
  let smallImg = document.querySelector("img.pic");

  largeImage.src = smallImg.src;   // use the same picture in large view
  modal.style.display = "flex";    // show modal
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close modal by clicking anywhere outside the image
window.onclick = function (event) {
  let modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
*/

