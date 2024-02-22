/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

/* 
- onTargetEvent - onBtnClick
- targetEventHandler - btnClickHandler
- handleTargetEvent - handleBtnClick
*/

// const btnElem = document.querySelector('.js-click');
// const boxElem = document.querySelector('.js-box');

/* btnElem.addEventListener('click', onBtnClick);

const position = {
  x: 100,
  y: 100,
};

function onBtnClick() {
  position.x = Math.round(Math.random() * 1000);
  position.y = Math.round(Math.random() * 1000);
  boxElem.style.left = `${position.x}px`;
  boxElem.style.top = `${position.y}px`;
}

btnElem.style.width = '100px';
btnElem.style.backgroundColor = 'red'; */

// ======================
const testBtn = document.querySelector('.js-test');
const addBtn = document.querySelector('.js-add-btn');
const removeBtn = document.querySelector('.js-remove-btn');

addBtn.addEventListener('click', onAddBtnClick);
removeBtn.addEventListener('click', onRemoveBtnClick);

function onAddBtnClick() {
  console.log('Add CLICK');
  testBtn.addEventListener('click', onTestBtnClick);
}

function onRemoveBtnClick() {
  console.log('REMOVE CLICK');
  testBtn.removeEventListener('click', onTestBtnClick);
}

function onTestBtnClick() {
  console.log('TEST');
}
