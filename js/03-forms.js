/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const formElem = document.querySelector('.js-form');

formElem.addEventListener('submit', onFormSubmit);

/* function onFormSubmit(e) {
  e.preventDefault();
  const email = formElem.elements.email.value;
  const password = formElem.elements.password.value;
  const message = formElem.elements.comment.value;

  const data = { email, password, message };

  console.log(data);
} */

function onFormSubmit(e) {
  e.preventDefault();

  const data = {
    email: formElem.elements.email.value,
    password: formElem.elements.password.value,
    message: formElem.elements.comment.value,
  };

  console.log(data);
}
