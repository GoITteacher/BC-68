/**
 * JSON
 * - stringify
 * - parse
 */
// =========================================

/* const data = {
  name: 'Vasya',
  age: 25,
  isStudent: undefined,
  showName() {
    console.log('Hello');
  },
};
const zip = JSON.stringify(data);

console.log(zip); */

// =========================================

/* const zip = '{"name":"Vasya","age":25}';

const data = JSON.parse(zip);

console.log(data); */

// =========================================

/* const obj = {
  name: 'Obj1',
  counter: 0,
  friends: [1, 2, 3, 4, 5, 6],
};

const copyJSON = JSON.stringify(obj);
const copyObj = JSON.parse(copyJSON);

console.log(copyObj); */

// ===========================================

// compile error
// runtime error

/* let x = 10;
console.log('START');
try {
  console.log('BEFORE ERROR');
  x = 20;
  console.log('AFTER ERROR');
} catch (err) {
  console.log('Error');
}

console.log('END'); */

// ===========================================

/* console.log('START');
const userJSON = prompt('Enter your json data');

try {
  const data = JSON.parse(userJSON);
  console.log(data);
} catch (err) {
  console.log(err);
}

console.log('END'); */

// ===========================================

/**
 * LocalStorage
 */

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const user = {
//   name: 'vasya',
//   city: 'awdawd',
//   country: 'awdawdaw',
// };

// localStorage.setItem('user1', user);
// localStorage.setItem('user2', JSON.stringify(user));
// localStorage.setItem('data', JSON.stringify(user));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// const zip = localStorage.getItem('user');
// const user = JSON.parse(zip);
// console.log(user);

/**
 * Видалення
 */

// localStorage.removeItem('user');

/**
 * LocalStorage не може зберігати функції
 */

// localStorage.clear();

// =============================================

/* localStorage.setItem('key1', JSON.stringify(10));
localStorage.setItem('key2', JSON.stringify(20));
localStorage.setItem('key3', JSON.stringify(30));
localStorage.setItem('key4', JSON.stringify(40));
localStorage.setItem('key5', JSON.stringify(50));
localStorage.setItem('key6', JSON.stringify(60));
localStorage.setItem('key7', JSON.stringify(70)); */

// =============================================

/* function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

saveToLS('key1', 10);
saveToLS('key2', 20);
saveToLS('key3', 30);
saveToLS('key4', 40);
saveToLS('key5', 50);
saveToLS('key6', 60);
saveToLS('key7', 70); */

// =============================================

/* try {
  const json = localStorage.getItem('key1');
  const data1 = JSON.parse(json);
} catch (err) {
  console.log(err);
}

try {
  const json = localStorage.getItem('key2');
  const data2 = JSON.parse(json);
} catch (err) {
  console.log(err);
}

try {
  const json = localStorage.getItem('key3');
  const data3 = JSON.parse(json);
} catch (err) {
  console.log(err);
}

try {
  const json = localStorage.getItem('key4');
  const data4 = JSON.parse(json);
} catch (err) {
  console.log(err);
}

try {
  const json = localStorage.getItem('key5');
  const data5 = JSON.parse(json);
} catch (err) {
  console.log(err);
} */

// =============================================

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

const data1 = loadFromLS('key1');
const data2 = loadFromLS('key2');
const data3 = loadFromLS('key3');
const data4 = loadFromLS('key4');
const data5 = loadFromLS('key5');
