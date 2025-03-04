
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded",  () => {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
});


document.getElementById("prev").addEventListener("click", () => {
  slides[slideIndex].classList.remove("displaySlide");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
    slides[slideIndex].classList.add("displaySlide");
  }
});

document.getElementById("next").addEventListener("click", () => {
  slides[slideIndex].classList.remove("displaySlide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
    slides[slideIndex].classList.add("displaySlide");
  }
});




// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let valid = null;

// const initialSlider = () => {
//   if (slides.length > 0) {
//     slides[slideIndex].classList.add("displaySlide");
//     valid = setInterval(nextSlide, 2000);
//   }
// };

// document.addEventListener("DOMContentLoaded", initialSlider);

// const nextSlide = () => {
//   slideIndex++;
//   showSlide(slideIndex);
// };

// const showSlide = (index) => {
//   if (index >= slides.length) {
//     slideIndex = 0;
//   } else if (index < 0) {
//     slideIndex = slides.length - 1;
//   }

//   slides.forEach((slide) => {
//     slide.classList.remove("displaySlide");
//   });
//   slides[slideIndex].classList.add("displaySlide");
// };
// document.getElementById("prev").addEventListener("click", () => {
//   slideIndex--;
//   showSlide(slideIndex);
// });
// document.getElementById("next").addEventListener("click", () => {
//   slideIndex++;
//   showSlide(slideIndex);
// });