/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// ==========================================

// ==========================================
/* function myDay(day, callback) {
  console.log(`\n\n-------${day}--------`);
  console.log('Застелити ліжко');
  console.log('Почистити зуби');
  console.log('Поснідати');
  console.log('Піти до школи');
  console.log('Позайматись');
  callback(day);
  console.log('Зробити дз');
  console.log('Вільний час');
  console.log('Вечеря');
  console.log('Спати');
  console.log('--------------------');
}

function goToMusicSchool(x) {
  console.log('Піти до муз школи');
  console.log(x);
  console.log('Повернутись з муз школи');
}

function goToDanceSchool(y) {
  console.log('Піти на танці');
  console.log(y);
  console.log('Повернутись');
}

function goToHome(q) {
  console.log(q);
  console.log('Повернутись до дому');
}

myDay('Понеділок', goToMusicSchool);
myDay('Вівторок', goToDanceSchool);
myDay('Середа', goToMusicSchool);
myDay('Четвер', goToDanceSchool);
myDay('Пятниця', goToHome); */
// ==========================================

/**
 * Функція calc(a, b, callback)
 */
/* 
function calc(a, b, callback) {
  console.log('\n\n----------------');
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  const result = callback(a, b);
  console.log(result);
  console.log('----------------');
}

function sum(x1, x2) {
  return x1 + x2;
}

function sub(x1, x2) {
  return x1 - x2;
}
function mult(x1, x2) {
  return x1 * x2;
}

function div(x1, x2) {
  return x1 / x2;
}

calc(2, 3, sum);
calc(2, 3, mult);
calc(2, 3, sub);
calc(2, 3, div); */

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

/* function each(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const res = callback(array[i]);
    result.push(res);
  }
  return result;
}

const arr = [2, 5, 8, 3];
const arr2 = [2, 5, 8, 3];

function sum(i) {
  return i + 100;
}
function pow(i) {
  return i ** 2;
}

function toString(value) {
  return value.toString();
}

const result1 = each(arr, toString);
const result2 = each(arr2, toString);

console.log(result1);
console.log(result2); */

/* 




*/

// ==================================

/* function foo(x, y) {
  console.log(x);
}


foo(25, function(){}); */

// ==================================

/* console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
); */
