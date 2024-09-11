let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}




document.getElementById("remove").addEventListener("click", () => {
     const menu = document.querySelector(".menu");
     menu.style.display= "none";
});

document.getElementById("bars").addEventListener("click", () => {
     const menu = document.querySelector(".menu");
     menu.style.display= "block";
});

// script.js
// Select all the sections
const sections = document.querySelectorAll('.content-section');

function showSectionOnScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    // Check if the section is within the viewport
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

// Run the function when the page loads and on scroll
window.addEventListener('scroll', showSectionOnScroll);
showSectionOnScroll(); // To show sections that are already in view on page load
