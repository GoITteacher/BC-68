/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

/* const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

for (const num of numbers) {
  if (num % 2 === 0) {
    total += num;
  }
}

console.log(total); */

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

/* const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const arr1 = names.split(",");
const arr2 = phones.split(",");

for (let i = 0; i < arr1.length; i++) {
  const str = `${arr1[i]} - ${arr2[i]}`;
  console.log(str);
} */

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future some words";
// const result = string.split(" ").slice(1, -1).join(" ");
// console.log(result);

// ============

/* const arr = ["c++", "js", "c#", "css", "html", "react", "java"];
const result = arr.join(" ").toUpperCase().split(" ");
console.log(result); */

// ============

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

/* const salaries = [2, 4, 1, 3, 3, 1, 2, 3, 5];
let min = salaries[0];

for (const salary of salaries) {
  if (salary < min) {
    min = salary;
  }
}
console.log(min); */

// let max = -Infinity;

/* for (const salary of salaries) {
  if (salary > max) {
    max = salary;
  }
} */

console.log();
