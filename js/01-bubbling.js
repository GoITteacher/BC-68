/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const innerChild = document.querySelector('#inner-child');
/* 
innerChild.addEventListener('click', e => {
  console.log('Inner Child 1');
});

innerChild.addEventListener('click', e => {
  console.log('Inner Child 2');
  e.stopImmediatePropagation();
});

innerChild.addEventListener('click', e => {
  console.log('Inner Child 3');
});

child.addEventListener('click', e => {
  console.log('Hello Child');
});

parent.addEventListener('click', e => {
  console.log('Hello Parent');
});
 */

// ========================================
/* innerChild.addEventListener('click', e => {
  console.log(e.currentTarget);
});

child.addEventListener('click', e => {
  console.log(e.currentTarget);
});
parent.addEventListener('click', e => {
  console.log(e.currentTarget);
}); */
// ========================================

/* innerChild.addEventListener('click', e => {
  console.log(e.target);
});

child.addEventListener('click', e => {
  console.log(e.target);
});

parent.addEventListener('click', e => {
  console.log(e.target);
}); */
