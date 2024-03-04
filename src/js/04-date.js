/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

/* const date1 = new Date();
const date2 = new Date('2023');
const date3 = new Date('2023-02-03');
const date4 = new Date('2023/02/02');
const date5 = new Date('01.01.2024');
const date6 = new Date('01.01.2024 13:12:31');
const date7 = new Date(1000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
console.log(date7); */

// =======================================

// UNIX-час - кількість мілесекунд які минули з 1970 по поточний момент

// const date1 = new Date('01.01.1970');
// const date2 = new Date('02.01.1970');

// console.log((date2 - date1) / 1000);

// ========================================

// const date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0
// console.log(date.getDate());
// console.log(date.getDay()); // 0 - Sunday

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.getTime());

// ========================================

/* 
const date = new Date('01.01.1970 01:00:00');

console.log(date);

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getFullYear());
console.log(date.getUTCFullYear()); 
*/

// ========================================

// const date = new Date('03.04.2024 11:46:00'); // 0 - 3

// date.setFullYear(2027);
// date.setMonth(7);
// date.setMonth(37);

// date.setDate(date.getDate() + 365);

// date.setDate(date.getDate() + 15);
// console.log(date.getDay());

// date.setTime(25023423400);

// console.log(date);

// ========================================

/* const date1 = new Date('1970 14:10:20');
const date2 = new Date('1970 14:15:20');

console.log(date1.getTime());
console.log(date2.getTime());

console.log(date2 - date1); */

// 300000 / 1000 = 300 / 60 = 5

// ========================================

/* const initTime = Date.now();

setInterval(() => {
  const currentTime = Date.now();
  console.log(currentTime - initTime);
}, 1000); */
// ========
