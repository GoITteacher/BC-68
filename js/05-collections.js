/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

// ============================================================

/* const myElems = [];

for (const obj of options) {
  const myElem = document.createElement('div');
  myElem.classList.add('color-picker-item');

  const firstChild = document.createElement('div');
  firstChild.style.width = '100px';
  firstChild.style.height = '100px';
  firstChild.style.backgroundColor = obj.color;

  const secondChild = document.createElement('p');
  secondChild.textContent = obj.label;

  myElem.append(firstChild, secondChild);

  myElems.push(myElem);
}

colorPickerContainerEl.append(...myElems); */

// ============================================================

/*
 * Пишемо функцію для створення розмітки колорпікера
 */

/* function cardTemplate(obj) {
  return `
<div class="color-picker-item">
  <div style="width: 100px; height: 100px; background-color: ${obj.color}"></div>
  <p>${obj.label}</p>
</div>
`;
}

function cardsTemplate(arr) {
  const markup = arr.map(cardTemplate).join('\n\n');
  return markup;
}

colorPickerContainerEl.innerHTML = cardsTemplate(options); */
