import refs from './refs';
import { messagesTemplate } from './render-function';
import { saveToLS, loadFromLS } from './helpers';

const STORAGE_KEY = 'feedback-msg';

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
/* form.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const message = e.currentTarget.elements.message.value;
  const userData = { name, message };

  messages.push(userData);
  const markup = messageTemplate(userData);
  ulElem.insertAdjacentHTML('beforeend', markup);

  e.target.reset();
  localStorage.removeItem('formData');
}); */

/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

form.addEventListener('input', e => {
  const name = e.currentTarget.elements.name.value;
  const message = e.currentTarget.elements.message.value;

  const userData = { name, message };

  saveToLS('formData', userData);
});

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function init() {
  // ==========
  const data = loadFromLS('formData');
  form.elements.name.value = data?.name || 'Anonymous';
  form.elements.message.value = data?.message || '';
  // ==========

  // ==========
  const currentColor = loadFromLS('bgColor');
  document.body.style.backgroundColor = currentColor;
  // ==========
}

init();

// ======================================

// ================================================

const inputElem = document.querySelector('.js-color-input');

inputElem.addEventListener('input', e => {
  const currentColor = e.target.value;
  document.body.style.backgroundColor = currentColor;
  saveToLS('bgColor', currentColor);
});

// ================================================

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = e.currentTarget.elements.name.value;
  const message = e.currentTarget.elements.message.value;
  const userData = { name, message };

  if (!name.trim() || !message.trim()) {
    alert('Error Empty Fields!');
    return;
  }

  const markup = messageTemplate(userData);
  ulElem.insertAdjacentHTML('beforeend', markup);

  messages.push(userData);
  saveToLS('messages', messages);

  e.target.reset();
  localStorage.removeItem('formData');
});

let messages = [];

function renderMessages() {
  messages = loadFromLS('messages') || [];
  const markup = messagesTemplate(messages);
  ulElem.innerHTML = markup;
}

renderMessages();
