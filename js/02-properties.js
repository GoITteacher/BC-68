/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const url = 'https://source.unsplash.com/500x500/?random=1&avatar,profile';

// imageEl.setAttribute('data-hello', 'Hello World');
// imageEl.setAttribute('src', url);
// ==============================================
/* 



*/
// ==============================================

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */
// const imageEl = document.querySelector('.hero__image');

// ==============================================
// imageEl.addEventListener('click', () => {
//   const url = 'https://source.unsplash.com/500x500/?random=1&avatar,profile';
//   imageEl.setAttribute('src', url);
// });
// ==============================================
// const res = imageEl.getAttribute('width');
// console.log(res);
// ==============================================

// const res = imageEl.hasAttribute('disabled'); // true false;
// console.log(res);

// ==============================================

// imageEl.removeAttribute('alt');

// ==============================================

// const heroTitleEl = document.querySelector('.hero__title');

/*
 * Data-атрибути
 */
// const imageEl = document.querySelector('.hero__image');

// const actions = document.querySelectorAll('.actions button');

/* console.log(imageEl.dataset);
console.log(imageEl.dataset.type);
console.log(imageEl.dataset.id);
console.log(imageEl.dataset.text);
console.log(imageEl.dataset.action);

imageEl.dataset.hello = 'Hello world';
document.body.dataset.user = 'Volodka'; */

// =============================================

/* const removeBtnElem = document.querySelector('[data-action="remove"]');

const removeBtnElem1 = {
  textContent: 'Delete',
};

removeBtnElem.textContent = removeBtnElem.textContent.toUpperCase(); */

// ===============================================

const h1Elem = document.querySelector('.hero__title');
h1Elem.textContent = 'Hello World';

// ===============================================

const liElems = document.querySelectorAll('#my-list>li');

let counter = 1;
for (const liElem of liElems) {
  liElem.textContent = counter++;
}

// ===============================================
