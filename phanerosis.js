//--------------------------------------
// Detect current page
//--------------------------------------
console.log("FILE DETECTED:", window.location.pathname);

let file = window.location.pathname
          .split("/")
          .pop();

if (file === "index.html") {
  // Slideshow JS

  let slideIndex = 1;  // THIS WAS MISSING

   // Initialize slideshow
  showSlides(slideIndex);
  autoSlides();

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


//Back to top button JS
if (file === "index.html") {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // CLICK TO ENLARGE IMAGES
    document.querySelectorAll('.enlarge-img').forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.getElementById("imgLightbox");
            const lightImg = document.getElementById("imgLightboxContent");

            lightImg.src = img.src;       // Copy clicked image
            lightbox.style.display = "flex";
        });
    });

    // CLOSE ENLARGED IMAGE WHEN CLICKED
    document.getElementById("imgLightbox").addEventListener('click', () => {
        document.getElementById("imgLightbox").style.display = "none";
    });
}
}







// Contact page JS
if (file === "contact.html") { // Address to be clicked to open map
 document.addEventListener("DOMContentLoaded", () => {
 document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const address = this.dataset.address;
        if (!address) {
            console.error("No data-address found on:", this);
            return;
        }

        const encoded = encodeURIComponent(address);
        const mapsURL = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

        console.log("Opening Maps:", mapsURL);

        window.open(mapsURL, "_blank");
    });
 });
 });

 document.querySelectorAll('.contact-phone').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const phone = this.dataset.phone;
        if (!phone) return;

        window.location.href = `tel:${phone}`;
    });
});


document.querySelectorAll('.contact-email').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const email = this.dataset.email;
        if (!email) return;

        window.location.href = `mailto:${email}`;
    });
});


document.querySelectorAll('.contact-whatsapp').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const number = this.dataset.whatsapp;
        if (!number) return;

        const encoded = encodeURIComponent(number);
        const url = `https://wa.me/${encoded}`;

        window.open(url, "_blank");
    });
});


}

  

//if (file === "") {






// Sidebar JS
function showSideBar() {
            const sidebar = document.querySelector('.sidebar').classList.add('active');
            // show sidebar
        }

function hideSideBar() {
            const sidebar = document.querySelector('.sidebar').classList.remove('active');  // hide sidebar
        }

/*

*/
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



// Default to index.html if blank
 
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


