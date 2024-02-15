// =======================================
/* const numbers1 = [1, 2, 3, 4, 5, 6];

function foo(arr) {
  arr.pop();
}

foo(numbers1);

console.log(numbers1); */

/* 
- filter
- reduce
- sort - мутуючий
- some
- every
- splice - мутуючий
- pop - мутуючий
- push
*/

// =======================================

/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

/* const numbers = [5, 10, 15, 20, 25, 30, 35];

const filteredNumbers = numbers.filter(el => {
  return el % 2 === 0;
});

console.log(filteredNumbers); */

/**
 * ---------------------------
 */

const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

const filterByPrice = (cars, threshold) => {
  const filteredCars = cars.filter(car => car.price < threshold);

  return filteredCars;
};

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

/* const getCarsWithDiscount = cars => {
  const filteredArr = cars.filter(car => car.onSale);
  return filteredArr;
};

console.table(getCarsWithDiscount(allCars)); */

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

/* const getCarsWithType = (cars, type) => {
  return cars.filter(car => car.type === type);
};

console.table(getCarsWithType(allCars, 'suv'));
console.table(getCarsWithType(allCars, 'sedan'));
 */

// ====================
/* const arr = [1, 3, 4, 0, 1, 0, 2, 0, 4, 5, 6, 0, 6, 0];

const filteredArr = arr.filter(num => num);

console.log(filteredArr); */
