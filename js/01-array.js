/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

const friends = [
  { name: 'Mango', online: false, age: 15 },
  { name: 'Kiwi', online: true, age: 25 },
  { name: 'Poly', online: true, age: 20 },
  { name: 'Ajax', online: false, age: 19 },
];

/**
 * Пошук друга за іменем
 */

/* function findFriendByName(allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name === friendName) {
      return friend;
    }
  }
}

console.log(findFriendByName(friends, 'Poly')); */

/**
 * Отримуємо імена всіх лрузів
 */
/* function getAllNames(allFriends) {
  const arr = [];

  for (const friend of allFriends) {
    arr.push(friend.name);
  }

  return arr;
}

console.table(getAllNames(friends)); */

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */
/* function getOnlineFriends(allFriends) {
  const arr = [];

  for (const friend of allFriends) {
    if (friend.online) {
      arr.push(friend.name);
    }
  }

  return arr;
}

console.log(getOnlineFriends(friends)); */

/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

/* const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];

function calcTotalPrice(allStones, stoneName) {
  for (const stone of allStones) {
    if (stone.name === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return 0;
}

console.log(calcTotalPrice(stones, 'awdaw')); */
