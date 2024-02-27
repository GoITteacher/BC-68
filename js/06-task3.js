/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ lenA: a, lenB: b }) {
  const perimeter = a * 2 + b * 2;
  return perimeter;
}

const houseInfo = {
  lenA: 10,
  lenB: 15,
};

const perimeter = calculateHousePerimeter(houseInfo);
console.log(`Периметр будинку: ${perimeter}`);

const user = {
  name: 'Vasya',
};
