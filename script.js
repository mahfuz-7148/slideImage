const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
});

document.getElementById("prev").addEventListener("click", () => {
  slides[slideIndex].classList.remove("displaySlide");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].classList.add("displaySlide");
});

document.getElementById("next").addEventListener("click", () => {
  slides[slideIndex].classList.remove("displaySlide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.add("displaySlide");
});