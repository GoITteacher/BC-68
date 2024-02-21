//==============================

// console.log(window); // BOM
// console.log(document); //DOM

//==============================

/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

/* const element1 = document.querySelector('li');

const element2 = document.querySelector('.js-site-nav');

const element3 = document.querySelector('#second-elem');

console.log(element3); */

// ==========================================

// const ulElem = document.querySelector('ul:last-child');

// const firstLiElem = ulElem.querySelector('li:last-child');

// console.log(firstLiElem);

// ==========================================

/* const liElems = document.querySelectorAll('li');

const firstLi = liElems[0];

console.log(firstLi); */

// ==========================================

// ==========================================

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */

const liElem = document.querySelector('#second-elem');

// console.log(liElem.parentNode);

// console.log(liElem.previousElementSibling);
// console.log(liElem.nextElementSibling);

// console.log(liElem.firstElementChild);
// console.log(liElem.lastElementChild);

// console.log(liElem.children[1]);
// console.log(liElem.children[2]);
// console.log(liElem.children[3]);

liElem.parentElement.lastElementChild.previousElementSibling.children[1];
