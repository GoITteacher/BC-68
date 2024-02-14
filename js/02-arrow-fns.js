/**
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

// const arrow = x => x * 2;
// console.log(arrow(6));

// =======================
// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// =======================

const arrow = (...args) => {
  console.log(args);
};
arrow(1, 4, 3, 2, 6, 7, 8);

// =======================

/**
 * ---------------------------
 */

/* const arrowFnA = () => {
  return {
    a: 10,
  };
};

console.log(arrowFnA()); */

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}

calc(2, 3, (x, y) => x + y);
calc(10, 8, (x, y) => x - y);
