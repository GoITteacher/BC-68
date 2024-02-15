/* const numbers = [1, 2, 3, 4, 5, 6, 0, 87, 8, 9, 9];

const res1 = numbers.find(num => num > 10); // 87
const res2 = numbers.filter(num => num > 10); // [87]
const res3 = numbers.every(num => num > 0); // false
const res4 = numbers.some(num => num > 10); // true

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);
 */
// =====================================
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */
const isAllOnline = players.every(player => player.online);
console.log('isAllOnline: ', isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
const isAnyOnline = players.some(p => p.online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players;
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
