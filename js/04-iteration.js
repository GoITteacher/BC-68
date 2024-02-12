/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

/* const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

for (const key in feedback) {
  totalFeedback += feedback[key];
}

console.log("totalFeedback: ", totalFeedback);
 */
/**
 * ---------------------------------
 */

/* const user = {
  username: "Volodka",
  age: 23,
  city: "Dnipro",
  country: "Ukraine",
};

for (const key in user) {
  const str = `user[${key}] = ${user[key]}`;
  console.log(str);
} */

/**
 * ---------------------------------
 */

/* let x = 10;

x += 15;
x -= 5;

console.log(x); */

/**
 * ---------------------------------
 */
/* const objA = {
  x1: 10,
  x2: 20,
  x3: 30,
};

const objB = {
  y1: 50,
  y2: 60,
  y3: 70,
  address: {
    city: "",
    country: "",
    street: "",
  },
};

for (const key in objB) {
  console.log(key, objB[key]);
} */

/**
 * ---------------------------------
 */
/* const objA = {
  x1: 10,
  x2: 20,
  x3: 30,
};

const objB = {
  y1: 50,
  y2: 60,
  y3: 70,
}; */

/* const keys = Object.keys(objB);// ['']

console.log(keys);

for (const key of keys) {
  console.log(objB[key]);
} */

/* const values = Object.values(objB);

for (const value of values) {
  console.log(value);
}
 */

/* for (const elem of Object.keys(objB)) {
  console.log(elem);
}

for (const elem of Object.values(objB)) {
  console.log(elem);
} */

// ===========================

// const objB = {
//   y1: 50,
//   y2: 60,
//   y3: 70,
// };

/* 
[
  ['y1', 50],
  ['y2', 60],
  ['y3', 70],
]
*/
/* 
for (const arr of Object.entries(objB)) {
  const key = arr[0];
  const value = arr[1];
  console.log(key, value);
} */

// ===============================

/* 
const objB = {
  y1: 50,
  y2: 60,
  y3: 70,
};

for (const key in objB) {
  console.log(key);
}

for (const key of Object.values(objB)) {
  console.log(key);
} */

// ===============================
