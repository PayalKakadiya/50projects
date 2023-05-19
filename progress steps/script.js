const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const active = document.querySelectorAll('.active');

let currentactive = 1;
next.addEventListener('click', () => {
  currentactive++;
  if (currentactive > circles.length) {
    currentactive = circles.length;
  }
  update();
});
prev.addEventListener('click', () => {
  currentactive--;
  if (currentactive < 1) {
    currentactive = 1;
  }
  update();
});
update = () => {
  circles.forEach((circle, indx) => {
    console.log(indx, currentactive);
    if (indx < currentactive) {
      circle.classList.add('active');
      console.log(circle.classList);
    } else {
      circle.classList.remove('active');
    }
  });

  progress.style.width = (active.length / circles.length) * 100 + '%';

  // console.log(active.length, circles.length);
  //console.log((active.length / circles.length) * 100);
};
