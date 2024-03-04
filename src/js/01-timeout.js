/*
 * Метод window.setTimeout(callback, delay, args)
 */

// setTimeout(callback, delay)

// console.log(1);

// setTimeout(() => {
//   console.log('Hello');
// }, 5000);

// setTimeout(() => {
//   console.log('Hello');
// }, 2000);

// console.log(2);

// for (let i = 0; i < 100; i++) {
//   console.log();
// }

// ================

/* setTimeout(() => {
  console.log('hello');
}, 0);

console.log(1);
console.log(2);
console.log(3);
console.log(4); */

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
/* function callback() {
  console.log('Hello');
}

const timeoutId = setTimeout(callback, 5000);

clearTimeout(timeoutId); */

/**
 * Можливість передати параметри для колбеку
 */

/* for (let i = 0; i < 3; i++) {
  setTimeout((x, y) => {}, i * 1000, 10, 20);
}

function callback(x, y, q, i) {
  console.log(i);
} */
