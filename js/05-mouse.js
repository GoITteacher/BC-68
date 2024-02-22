/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector('.js-box');
/* 
boxRef.addEventListener('mouseenter', onBoxRefMouseEnter);
boxRef.addEventListener('mouseleave', onBoxRefMouseLeave);

function onBoxRefMouseEnter() {
  console.log('ENTER');
  boxRef.classList.add('box--active');
}

function onBoxRefMouseLeave() {
  console.log('leave');
  boxRef.classList.remove('box--active');
} */

boxRef.addEventListener('mousemove', onBoxMouseMove);
const childBox = boxRef.firstElementChild;

function onBoxMouseMove(e) {
  childBox.style.left = `${e.x - 150}px`;
  childBox.style.top = `${e.y - 150}px`;
}
