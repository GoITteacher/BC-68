/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

/* document.addEventListener('keypress', e => {
  console.log('KEY PRESS', e.code, e.key);
}); 

document.addEventListener('keydown', e => {
  console.log('KEY DOWN', e.code, e.key);
});

document.addEventListener('keyup', () => {
  console.log('UP');
});*/

/**
 * Обробка комбінацій клавіш
 */

// document.addEventListener('keypress', e => {
//   console.log(e.code);
//   if (e.ctrlKey && e.code === 'KeyH') {
//     alert('Hello World');
//   }
// });

/* document.addEventListener('keypress', e => {
  if (e.shiftKey && e.code === 'KeyC') {
    document.body.innerHTML = '';
  }
}); */
