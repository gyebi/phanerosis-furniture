console.log("PATHNAME:", window.location.pathname);

// Sidebar JS
function showSideBar() {
            const sidebar = document.querySelector('.sidebar').classList.add('active');
            // show sidebar
        }

function hideSideBar() {
            const sidebar = document.querySelector('.sidebar').classList.remove('active');  // hide sidebar
        }


// Slideshow JS

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

console.log("FILE DETECTED:", window.location.pathname);
// Get current file (removes folders + query parameters)
let file = window.location.pathname
              .split("/")     // break up the path
              .pop()          // get the last segment (the filename)
              .split("?")[0]; // remove query parameters

// Default to index.html if blank
if (file === "") file = "index.html";

// Default to index.html if blank
  //const pageMap = [
    //{pageHtml: "index.html", name: "home"},
    //{pageHtml: "about.html", name: "about"},
    //{pageHtml: "products.html", name: "products"},
    //{pageHtml: "contact.html", name: "contact"}
  //]

  // Map filename → data-page key
const pageMap = {
  "index.html": "home",
  "about.html": "about",
  "products.html": "products",
  "contact.html": "contact"
};


  const currentPageKey = pageMap[file] || "home";


 // Apply active class to matching links
document.querySelectorAll('.main-header a[data-page]').forEach(link => {
  if (link.dataset.page === currentPageKey) {
    link.classList.add("active");
  }
});