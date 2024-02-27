/**
 * Деструктуризація об'єкта
 * - Навіщо потрібна деструктуризація?
   - Деструктуризація об'єктів
   - Деструктуризація неіснуючих властивостей
   - Перейменування змінної
   - Значення за замовчуванням
   - Глибока деструктуризація
 */

// ========================================
/* const user = {
  username: 'Jacob name',
  age: 12,
  city: 'Dnipro',
  country: 'Ukraine',
  phoneNumber: 'awdawdadw',
};

const { city, age, country, username } = user; */

// const username = user.username;
// const age = user.age;
// const country = user.country;
// const city = user.city;

// ========================================
/* const user = {
  username: 'Jacob name',
  age: 12,
  city: 'Dnipro',
  country: 'Ukraine',
}; */

// const { age, city, phoneNumber, phoneNumber2, phoneNumber3 } = user;
// let age = user.age;
// let city = user.city;
// let phoneNumber = user.phoneNumber

/* console.log(age);
console.log(city);
console.log(phoneNumber);
console.log(phoneNumber2);
console.log(phoneNumber3); */

// ========================================

/* const user = {
  username: 'Jacob name',
  age: 12,
  city: 'Dnipro',
  country: 'Ukraine',
};

const {
  city: myCity,
  username: myUsername,
  age: myAge,
  country: myCountry,
} = user; */

// ========================================
/* const user = {
  username: 'Jacob name',
  age: 12,
  city: 'Dnipro',
  country: 'Ukraine',
};

const {
  username,
  age,
  phone = '0000',
  isAdmin = 'default',
  isStudent = false,
} = user; */

// ========================================

/* const user = {
  username: 'Jacob name',
  age: 12,
  city: 'Dnipro',
  country: 'Ukraine',
};

const {
  phoneNumber: userPhoneNumber = '000000000',
  isAdmin: userIsAdmin = false,
  isStudent: userIsStudent = false,
  location: userLocation = {},
  friends: userFriends = [],
  group: userGroup = 'default',
} = user; */

// ========================================

// ========================================

/**
 * Глибока деструктуризація об'єкта
 */
/* 
const user = {
  name: 'Vasya',
  address: {
    city: 'Dnipro',
    country: 'Ukraine',
    street: 'My Street',
  },
}; */

/* const {
  address: { city, country, street },
} = user; */
// const {city, country, street} = user.address

// const { city, country, street } = user.address;

// ========================================

/* const square = {
  cor1: { x: 10, y: 20 },
  cor2: { x: 20, y: 20 },
  cor3: { x: 10, y: 10 },
  cor4: { x: 20, y: 10 },
};

const {
  cor1: { x: x1, y: y1 },
  cor2: { x: x2, y: y2 },
  cor3: { x: x3, y: y3 },
  cor4: { x: x4, y: y4 },
} = square;

console.log(x1, y1);
console.log(x2, y2);
console.log(x3, y3);
console.log(x4, y4); */

// ========================================

const userData = {
  name: 'Vasya',

  options: {
    points: 10,
    lvl: 2,
    type: 'magic',
    balance: 0,
    location: {
      x: 10,
      y: 20,
    },
  },
};

const {
  name,
  options: { points, balance },
} = userData;

/* const { name, options } = userData;
const { lvl, type, balance, location } = options;
const { x, y } = location; */

// ========================================

/**
 * Деструктуризація масива
 */

/* const arr = [1, 2, 3, 4, 5];
const [x1, x2, x3] = arr; */

// ========================================

/* const rgb = [122, 32, 44];
const [red, green, blue] = rgb;
console.log(red, green, blue); */

// ========================================

// const arr = [1, 2, 3, 4, 5];
// const [ , , x3, x4, x5] = arr;

// ========================================

// const rgb = [200, 12, 32];

// const [r, g, b, a = 1] = rgb;

// console.log(a);

// ========================================
/* let t1 = 50;
let t2 = 55;

[t2, t1] = [t1, t2]; */

/* 
t2 = arr[0]// 50
t1 = arr[1]// 55
*/

// let [x, y, q, t] = [10, 20, 30, 40];

//========================================

// let x = 10;
// let y = 20;
// let t = 50;
// let q = 30;
// let r = 60;

// [x, y, t, q, r] = [y, 50, y, 10, q];

// [x, y] = [y, x];

//========================================

//      REST

//========================================

/* const userProps = {
  id: '123123',
  name: 'Vasya',
  age: 23,
  city: 'Dnipro',
  country: 'Ukraine',
};

const { id, age, ...user } = userProps;

console.log(userProps);
console.log(user); */

// =======================================

/* const color = {
  red: 123,
  green: 123,
  blue: 234,
  alpha: 0.4,
};

const { alpha, ...rgb } = color;

console.log(alpha);
console.log(rgb); */
//========================================

/* const rgba = [20, 30, 40, 0.4];

const [alpha, ...rgb] = rgba;

console.log(rgb); */

//========================================
