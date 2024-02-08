/**
 * Ітерація по масиву
 *
 * - Ітерація по масиву циклом for
 * - Метод includes
 * - Цикл for...of
 * - Різниця у використанні for и for...of
 */

// const arr = ["Mango", "Poly", "Ajax", "Js", "C++"];
// ================================

/* for (let i = 0; i < arr.length; i += 2) {
  console.log(i, arr[i]);
} */

/* for (let i = arr.length - 1; i >= 0; i -= 2) {
  console.log(i, arr[i]);
} */

/* for (let i = 0; i < arr.length; i += 2) {
  arr[i] = arr[i].toUpperCase();
} */

// console.log(arr);

// ================================
/* const arr = ["Mango", "Poly", "Ajax", "Js", "C++"];

for (const elem of arr) {
  console.log(elem);
} */

// ================================

/* for (let i = 1; i < 100; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    break;
  }

  console.log(i);
} */

/* const numbers = [
  "099234234",
  "093234545",
  "097563233",
  "099234546",
  "093232323",
  "097456643",
]; */

/* for (const phoneNumber of numbers) {
  if (!phoneNumber.startsWith("093")) {
    console.log(phoneNumber);
  }
} */

/* for (let i = 0; i < 10; i++) {
  if (i % 3 === 0) continue;
  const num = i ** 2;
  console.log(`${i}^2=${num}`);
} */

// ================================

/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

/* function getArea(values) {
  const params = values.split(" ");
  const area = params[0] * params[1];
  return area;
}

const s1 = getArea("8 11");
const s3 = getArea("5 13");

console.log(s3); */

/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

/* const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

function showArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    const str = `${i + 1}: ${arr[i]}`;
    console.log(str);
  }
} */

// showArr(fruits);

// showArr([4, 52, 4, 6, 2, 3, 5, 7]);
