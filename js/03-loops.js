/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Зворотній відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

/**
 * -------------------------------
 */

/* for (let i = 0; i < 20; i--) {
  console.log(i);
} */

/* for (let i = 0; i < 20; i += 2) {
  console.log(i);
} */

// console.log('After');

/**
 * -------------------------------
 */

/* const password = 'qwerty';
let userPassword = '';
while (password !== userPassword) {
  console.log('Wrong password');
  userPassword = prompt('Enter your password');
}
console.log('Hello'); */

// ==============================================

/* const random = Math.round(Math.random() * 100);
let userNum = null;
while (userNum !== random) {
  userNum = +prompt('Enter your number:');
  if (userNum > random) {
    alert('<');
  } else {
    alert('>');
  }
}
console.log('End'); */
// ==============================================

/* let message =
  'Hello wor ld ran dom = Ma th .r ou nd (Math. random( . ) *  100);';

while (message.includes('  ')) {
  message = message.replaceAll('  ', ' ');
}

console.log(message); */

// ==============================================

/**
 * -------------------------------
 */

/* console.log('Before while loop');

let counter = 0;

console.log('After while loop'); */
// ==============================================

/* let salary = 5500;

while (salary < 5000) {
  console.log('\n\n---------------');

  console.log('Не підходить, хочу більше');

  salary += Math.round(Math.random() * 300 + 100);

  console.log('Current salary', salary);

  console.log('---------------\n\n');
} */

// ==============================================

// let salary = 5500;

/* do {
  console.log('\n\n---------------');

  console.log('Не підходить, хочу більше');

  salary += Math.round(Math.random() * 300 + 100);

  console.log('Current salary', salary);

  console.log('---------------\n\n');
} while (salary < 5000); */
