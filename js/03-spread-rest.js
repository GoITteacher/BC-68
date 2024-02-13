/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

/* function foo(x, y, ...args) {
  console.log(args);
}

foo(10, 20, 30, 40, 50); */

// ===========================================

/* 
Напишіть функцію яка приймає першим параметром мінімальне значення. Й будь яку кількість чисел далі.
*/

/* function getFilteredNumbers(minValue, ...numbers) {
  const filteredArr = [];

  for (const elem of numbers) {
    if (elem > minValue) {
      filteredArr.push(elem);
    }
  }

  console.log(filteredArr);
}

getFilteredNumbers(3, 3, 4, 4, 3, 4, 54, 3, 3, 4, 5);
getFilteredNumbers(10, 3, 4, 67, 21, 3, 4, 6, 7, 8); */

// ===========================================

/* function getFilteredArr(minValue, maxValue, ...arr) {
  const filteredArr = [];

  for (const elem of arr) {
    if (elem > minValue && elem < maxValue) {
      filteredArr.push(elem);
    }
  }

  console.log(filteredArr);
}

getFilteredArr(5, 15, 3, 5, 6, 4, 3, 5, 7, 8, 6); */

// ===========================================
/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arr = [...arr3, ...arr1, ...arr2];

console.log(arr); */
// ===========================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */

/* const temps = [18, 14, 12, 21, 17, 29, 24];

const max = Math.max(...temps);
const min = Math.min(...temps);

console.log(max); */
// ===========================================

/* const arr1 = [1, 3, 56, 7, 3, 3, 1, 3];
const arr2 = [6, 7, 8, 9, 9, 98, 7, 6, 5, 5];
const arr3 = [2, 4, 3, 1, 234, 523, 2, 45];

const max = Math.max(...arr1, ...arr2, ...arr3);

console.log(max); */
// ===========================================

/* const arr = [1, 6, 9, 3, 5];
const temp1 = [1, 2, 3, 4, 4, 4];
const temp2 = [5, 6, 53, 2];
arr.push(...temp1, ...temp2);

console.log(arr); */

// ===========================================

/**
 * Створення масиву і тип за посиланням
 */

/* const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log(b === a);
*/

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
/* const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps); */

/*
 * Створення об'єкта
 */
/* const objA = { x: 1, y: 2 };
const objB = { q: 3, y: 20 };

const objC = { ...objA, ...objB, y: 25 };

console.log(objC); */

/**
 * Оновлюємо налаштування користувача
 */

const options = {
  theme: 'dark',
  backgroundColor: 'white',
  scale: '1.2',
};

const userOptions = {
  backgroundColor: 'blue',
  theme: 'light',
};

const finalSettings = {
  ...options,
  ...userOptions,
};

console.log(finalSettings);
