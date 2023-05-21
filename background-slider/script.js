const body = document.body;
const leftBTn = document.getElementById('left');
const rightBTn = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

rightBTn.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setactiveslide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setactiveslide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
}
