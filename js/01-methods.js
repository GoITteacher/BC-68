/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 *  - replace
 */
// ================================

// const username = 'Jacob Mercer';
// const result = username.slice(4);
// const result = username.slice(2);
// const firstName = username.slice(0, 5);
// const lastName = username.slice(6);
// console.log(firstName);
// console.log(lastName);

// ================================

/* let str1 = 'bookId';
let str2 = 'bookTitle';
let str3 = 'bookAuthor';

str1 = str1.slice(4);
str2 = str2.slice(4);
str3 = str3.slice(4);

console.log(str1);
console.log(str2);
console.log(str3); */

// ================================

// const username = 'Jacob Mercer';
// const last = username.slice(-5, -2);
// const last = username.slice(0, -1);
// console.log(last);

// ================================

/* let email = 'TestEmail@gmail.com';
email = email.toLowerCase();
console.log(email); */

/* const password = 'qwerty';
const updatedPassword = password.toUpperCase();
console.log(password);
console.log(updatedPassword); */
// ================================

/* const userMessage = 'Hello spam world';
const banWord = 'spam';

const includesBanWord = userMessage.includes(banWord);

if (includesBanWord) {
  console.log('******');
} else {
  console.log(userMessage);
} */

// ================================

/* const message = 'Hello world';

console.log(message.includes('a'));
console.log(message.includes('b'));
console.log(message.includes('o'));
console.log(message.includes('ld'));
console.log(message.includes('rd'));
console.log(message.includes('dl'));

console.log(message.includes('l', 6));
console.log(message.includes('e', 6)); */

// ================================

/*const message = 'Hello world';

console.log(message.startsWith('!- '));
console.log(message.startsWith('$'));

console.log(message.endsWith(' -!'));
console.log(message.endsWith('$')); 

console.log(message.endsWith('l', 3));*/

// ================================

// const message = '12userData';
// console.log(message.startsWith('user', 2));

// ================================

/* const fullName = 'Jacob Mercer Test';
const firstIndex = fullName.indexOf(' ');
const secondIndex = fullName.indexOf(' ', firstIndex + 1);
const lastIndex = fullName.lastIndexOf(' ', firstIndex + 1);

const firstName = fullName.slice(0, firstIndex);
const lastName = fullName.slice(firstIndex + 1, secondIndex);
const patronymic = fullName.slice(secondIndex + 1);

console.log(firstName);
console.log(lastName);
console.log(patronymic);
 */
// ================================

/* const fullName = 'Jacob Mercer Test';

const index = fullName.indexOf('Hello');

console.log(index);
 */

// ================================

// const message = 'Hello world';

// const index = message.indexOf('l');
// const lastIndex = message.lastIndexOf('l');
// const lastIndex = message.lastIndexOf('orl');

// console.log(index);
// console.log(lastIndex);

// ================================

/* const password = '\nqwe      rty\n\n\n\n';
const updatedPassword = password.trim();
console.log(password);
console.log(updatedPassword); */

// ================================

/* const key = 'userPassword';
const updatedKey = key.replace('user', '_');
console.log(updatedKey); */

// ================================

/* const message = 'Hello  world  test  word';

const updatedMessage = message.replaceAll('  ', ' ');

console.log(updatedMessage); */

// ================================
