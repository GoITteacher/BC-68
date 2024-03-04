/*
 * Метод setInterval(callback, delay, args)
 */

// console.log('start');

// setInterval(() => {
//   console.log('Hello');
// }, 1000);

// console.log('end');

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const intervalId = setInterval(() => {
  console.log('Hello');
}, 500);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
