/**
 * Псевдомасив arguments и Array.from
 */

// ================================
/* function foo() {
  // let arguments = [5,8,2,4];
  for (const arg of arguments) {
    console.log(arg);
  }
}
foo(5, 8, 2, 4); */
// ================================

// const max = Math.max(10, 2, 0, 5);
// const min = Math.min(10,2);
// [].push(1,1,2,3,1,2,4,5,2,1,3)

// ================================
// Написати функцію яка приймає довільну кількість чисел - де останнє число це мінімальне.
//функція повинна повернути всі числа які більше за мінімальне

/* function getMax() {
  const args = Array.from(arguments);
  const minElem = args.pop(); // 5
  const result = []; // [6,8]

  for (const elem of args) {
    if (elem > minElem) {
      result.push(elem);
    }
  }

  console.log(result);
} */

// getMax(1, 6, 2, 8, 3, 4, 5, 3, 1, 3, 5, 7, 5);
// getMax('123', '34', '45');

// ================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

/* function add() {
  const args = Array.from(arguments);
  let total = 0;
  for (const elem of args) {
    total += elem;
  }
  return total;
}

const res1 = add();

console.log(res1); */

/**
 * Напиши функцію calcAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

/* function calcAverage() {
  const args = Array.from(arguments);
  let total = 0;
  for (const elem of args) {
    total += Number.parseFloat(elem);
  }

  return total / args.length;
}

const result = calcAverage('10px', '20px', '39px');
console.log(result); */
// ========================================

/* function getMax() {
  const args = Array.from(arguments);
  let max = -Infinity;

  for (let elem of args) {
    if (elem > max) {
      max = elem;
    }
  }

  return max;
}

const max1 = getMax(1, 3, 2, 3, 6, 7);
console.log(max1); */

// ========================================

/* function getNamesStr() {
  const args = Array.from(arguments);
  const result = args.join(', ');
  console.log(result);
}
getNamesStr('Volodka', 'Max', 'Mila', 'Alina', 'Nadiya');
getNamesStr('Mila', 'Nadiya');
getNamesStr('Mila', 'Nadiya', ''); */

// ==================================

// function sum(x, y = 0) {
//   return x + y;
// }

// const res1 = sum(5, 10);
// const res2 = sum(7, 7);
// const res1 = sum(7);

// const res1 = sum();

// console.log(res1);

// ==================================

/* function pow(num, power = 2) {
  return num ** power;
}

const res1 = pow(2, -2);

console.log(res1); */

// =================================

/* function foo(x, y) {
  const sum = x + y;
}

const res = foo();

console.log(res); */

// =================================

/* function div(x, y) {
  if (y === 0) return;
  return x / y;
}

// const res = div(10, 2);
// const res = div(100, 4);
const res = div(100, 0);

console.log(res); */

/* function getBonus(salary) {
  if (salary > 5000) return salary;

  const percent = salary * 0.2;
  return salary + percent;
}

const salary1 = getBonus(2000);
const salary2 = getBonus(4500);
const salary3 = getBonus(6000);

console.log(salary3); */
