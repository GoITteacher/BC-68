/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

/* const numbers = [5, 10, 15, 20, 25];
numbers.forEach(saveToLocalStorage);
function saveToLocalStorage(elem) {
  console.log('save', elem);
} */

/* 
myFun( 5, 0, arr);
myFun(10, 1, arr);
myFun(15, 2, arr);
myFun(20, 3, arr);
myFun(25, 4, arr);
*/

// ==============================

/* const str = '2 3 5 6 7 8 8 9';

str.split(' ').forEach((num, idx) => {
  if (num > x.length) {
    console.log(num * idx);
  }
}); */

// ==============================
/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
/* function logItems(items) {
  console.log(items);

  items.forEach((elem, idx) => {
    console.log(`${idx + 1} - ${elem}`);
  });
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); */

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((elem, idx) => {
    console.log(`${elem}: ${phoneList[idx]}`);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
/* function calculateAverage(...args) {
  let total = 0;

  args.forEach(elem => {
    total += elem;
  });

  return total / args.length;
}

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2 */
// =============================
