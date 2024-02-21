/*
 * Створення та додавання елементів
 */

/* const myElem = document.createElement('h1');
myElem.textContent = 'Hello World';
myElem.dataset.id = 'awdaedaw';
myElem.classList.add('item');

console.log(myElem);

const divElem = document.querySelector('.js-hero');

divElem.append(myElem); */

/*
 * Створюємо заголовок
 */

/* const titleEl = document.createElement('h1');
titleEl.textContent = 'My Title';

document.body.prepend(titleEl); */

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
/* const imageEl = document.createElement('img');

imageEl.setAttribute(
  'src',
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg',
);
imageEl.setAttribute('alt', 'valais-alpine-mountains-glacier');
imageEl.style.width = '100px';
imageEl.style.height = '60px';

console.log(imageEl);

const heroEl = document.querySelector('.hero');
heroEl.append(imageEl);
heroEl.append(imageEl);
heroEl.append(imageEl);
heroEl.append(imageEl); */

/*
 * Створюємо та додаємо новий пункт меню
 */

/* const myElems = [];

for (let i = 0; i < 10; i++) {
  const navItemEl = document.createElement('li');

  navItemEl.textContent = `Item ${i}`;
  navItemEl.classList.add('item');
  navItemEl.dataset.id = i;
  navItemEl.style.textTransform = 'uppercase';

  myElems.push(navItemEl);
}

const ulElem = document.querySelector('ul');
ulElem.prepend(...myElems); */
