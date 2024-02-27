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

// const products = [
//   {
//     id: 1,
//     img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
//     name: 'Monitor',
//     price: 3000,
//     description: '23-inch monitor with Full HD resolution.',
//   },
//   {
//     id: 2,
//     img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
//     name: 'Laptop',
//     price: 20000,
//     description:
//       'Lightweight and powerful laptop with a 15-inch display and SSD.',
//   },
//   {
//     id: 3,
//     img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
//     name: 'Smartphone',
//     price: 8000,
//     description: 'Equipped with a triple camera and a multi-core processor.',
//   },
//   {
//     id: 4,
//     img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
//     name: 'Tablet',
//     price: 12000,
//     description: '10-inch tablet with high performance and a Retina display.',
//   },
// ];

// const result = products.map(({ name, price }) => {
//   return `${name} - ${price}$`;
// });

// const filtered = products.filter(({ price }) => price > 10000);

// const productNames = products.map(({ name }) => name);

// =====================================
