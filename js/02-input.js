/**
 * - Подія input
 * - Подія blur
 * - (focus, change)
 * Виводь в консоль все що користувач вводить в input
 */

/* const userNameElem = document.querySelector('.js-user-name');
const titleElem = document.querySelector('.js-title');

userNameElem.addEventListener('input', onUserNameInput);

function onUserNameInput() {
  const userName = userNameElem.value || 'Anonym';
  titleElem.textContent = `Hello ${userName}`;
} */

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

/* const inputElem = document.querySelector('.js-user-name');

inputElem.addEventListener('focus', onInputElemFocus);
inputElem.addEventListener('blur', onInputElemBlur);

function onInputElemFocus() {
  inputElem.classList.remove('invalid');
  inputElem.classList.remove('valid');
}

function onInputElemBlur() {
  const userName = inputElem.value;
  const minLen = inputElem.dataset.minLen;

  if (userName.length >= minLen) {
    inputElem.classList.add('valid');
  } else {
    inputElem.classList.add('invalid');
  }
} */

// =============================================
const inputElem = document.querySelector('.js-user-name');
const checkboxElem = document.querySelector('.js-checkbox');

/* checkboxElem.addEventListener('change', onCheckboxChange);
function onCheckboxChange() {
  inputElem.disabled = !checkboxElem.checked;

  // if (checkboxElem.checked) {
  //   inputElem.disabled = false;
  // } else {
  //   inputElem.disabled = true;
  // }
} */

// ===================================================
const radioElem1 = document.querySelector('.js-radio[data-idx="1"]');
const radioElem2 = document.querySelector('.js-radio[data-idx="2"]');

radioElem1.addEventListener('change', () => {
  inputElem.classList.add('valid');
  inputElem.classList.remove('invalid');
});

radioElem2.addEventListener('change', () => {
  inputElem.classList.remove('valid');
  inputElem.classList.add('invalid');
});
