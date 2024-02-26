/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

/* const boxes = document.querySelectorAll('.box');

for (const boxElem of boxes) {
  boxElem.addEventListener('click', onBoxClick);
}

function onBoxClick(e) {
  console.log(e.target.dataset.color);
} */

// =================================================

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector('.container');

container.addEventListener('click', onBoxClick);

function onBoxClick(e) {
  //   if (e.target === container) return;
  if (!e.target.classList.contains('box')) return;
  console.log(e.target.dataset.color);
}
