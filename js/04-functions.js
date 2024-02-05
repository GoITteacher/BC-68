/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// ===================================

/* function foo() {
  console.log('\n\n1. --------');
  console.log('2. --------');
  console.log('3. --------');
  console.log('4. --------');
  console.log('5. --------');
}

foo();
foo();
foo();
foo(); */

// ===================================

/* function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(10, 20); */

// ===================================

// function myDay(food) {
//   console.log('Прокинутись');
//   console.log('Поснідати');
//   console.log('Піти до школи');
//   console.log(food);
// }

// myDay('apple');

// myDay('meat');

// myDay('milk', 20);

// myDay();

// ===================================

// function sum(q, t) {
//   console.log((q + t) * 10);
// }

// sum(5);
// ===================================

// const rand = Math.random();
// const max = Math.max(1,2,5,1);

// ===================================

function sum(x, y, q) {
  return (x + y) * q;
}

// const num1 = sum(5, 6, 1);
// console.log(num1);

// ===================================

// ===================================

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

/* function calcBMI(weight, height) {
  weight = weight.replace(',', '.');
  height = height.replace(',', '.');

  weight = Number.parseFloat(weight);
  height = Number.parseFloat(height);

  const result = weight / height ** 2;
  return result;
}

const bmi1 = calcBMI('88,5', '1,1');
const bmi2 = calcBMI('83,5', '1,5');
const bmi3 = calcBMI('87,5', '1,3');
const bmi4 = calcBMI('84,5', '1,8');
const bmi5 = calcBMI('82,5', '1,2');

console.log(bmi1);
console.log(bmi2);
console.log(bmi3);
console.log(bmi4);
console.log(bmi5); */

// ==============================
/* 
function foo() {
  const x = 10;
  const y = 20;
  const result = x * y;
  return result;
}

const t = foo();

console.log(t); */

// ==============================

/* function foo() {
  const x = 10;
  const y = 20;
  return 10;
  const result = x * y;
  return result;
}

foo();
console.log(foo()); */

// ===============================

/* function makeOrder(productName, amount, price) {
  const msg = `You ordered ${amount} ${productName} (total price: ${
    price * amount
  })`;

  return msg;
}

const msg1 = makeOrder('Iphone', 3, 40000);
const msg2 = makeOrder('Macbook', 5, 20000);

console.log(msg2);
 */

// ==============================

// const x = 10;
// const y = 20;

// function foo() {
//   const x = 20;
//   console.log(x);
//   return x;
// }

// function foo1() {
//   const x = 30;
//   console.log(x);
// }

// console.log(x);

// const t = foo();
