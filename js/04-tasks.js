/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */
/* function logItems(items) {
  for (let i = 0; i < items.length; i++) {
    const str = `${i + 1} - ${items[i]}`;
    console.log(str);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); */
/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */
/* function printInfo(names, phones) {
  names = names.split(','); 
  phones = phones.split(',');

  for (let i = 0; i < names.length; i++) {
    const str = `${names[i]} - ${phones[i]}`;
    console.log(str);
  }
}

printInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300',
); */
/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */
/* function formatTime(mins) {
  let hours = Math.floor(mins / 60);
  let minutes = mins % 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');

  // hours = hours.toString().padStart(2, '0');
  // minutes = minutes.toString().padStart(2, '0');

  const str = `${hours}:${minutes}`;
  return str;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)) */
// "24:01"
// ============================================
/* const str = 'Hello World test some words';

const result = str.split('o');

console.log(result);
 */
// ====================

// ==============================================
//                      SORT
// ==============================================

/* function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
}

sort([1, 3.13, 5.753, 5.232, 8, 3.533, 1]); */

// ================================================

// const str = '(()){{[()({})]}}{()}'
/* 
function task1(str) {
  const result = [];

  for (const elem of str) {
    if ('[{('.includes(elem)) {
      result.push(elem);
    } else {
      const lastElem = result.pop();

      switch (elem) {
        case ')':
          if (lastElem !== '(') return false;
          break;
        case ']':
          if (lastElem !== '[') return false;
          break;
        case '}':
          if (lastElem !== '{') return false;
          break;
      }
    }
    console.log(result.join(''));
  }

  if (result.length > 0) return false;

  return true;
}

console.log(task1('{{([])}}(')); */

// =========================

function task2(str) {
  if (str.length % 2 !== 0) return false;

  const result = [];
  for (const elem of str) {
    if (elem === '(') {
      result.push(elem);
    } else {
      result.pop();
    }
  }

  return result.length === 0;
}

console.log(task2('()(((())'));
