/**
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     name: 'Kate',
//     age: 20,
//   },
//   {
//     name: 'Alex',
//     age: 15,
//   },
//   {
//     name: 'Mark',
//     age: 30,
//   },
// ];

// =================================

/* for (const user of users) {
  console.log(`Name:${user.name}; Age:${user.age}`);
}

for (const { name, age } of users) {
  console.log(`Name:${name}; Age:${age}`);
} */

// =================================

/* const userProps = {
  name: 'awdaw',
  age: 23,
  city: 'Dnipro',
  country: 'Ukraine',
};

const arr = Object.entries(userProps);

for (const [key, value] of arr) {
  console.log(`${key}: ${value}`);
} */

// =================================

/* const colors = [
  [130, 200, 144],
  [152, 200, 144],
  [123, 200, 144],
  [147, 200, 144],
  [168, 200, 144],
  [184, 200, 144],
  [131, 200, 144],
  [115, 200, 144],
  [128, 200, 144],
  [149, 200, 144],
];

for (const [red, green, blue] of colors) {
  console.log(`RED: ${red}
GREEN: ${green}
BLUE: ${blue}
`);
} */

// =================================
