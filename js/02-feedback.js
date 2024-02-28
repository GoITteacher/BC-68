const STORAGE_KEY = 'feedback-msg';

const form = document.querySelector('.feedback-form');
const ulElem = document.querySelector('.js-message-list');

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

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

// ================================================
/* 
-
-
-
-
-
-
-
 */
// ================================================

// ================================================

const inputElem = document.querySelector('.js-color-input');

inputElem.addEventListener('input', e => {
  const currentColor = e.target.value;
  document.body.style.backgroundColor = currentColor;
  saveToLS('bgColor', currentColor);
});

// ================================================
/* 
-
-
-
-
-
-
-
 */
// ================================================

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

function messageTemplate({ name, message }) {
  return `<li>
  <p>${name}: ${message}</p>
</li>`;
}

function messagesTemplate(arr) {
  return arr.map(messageTemplate).join('');
}

function renderMessages() {
  messages = loadFromLS('messages') || [];
  const markup = messagesTemplate(messages);
  ulElem.innerHTML = markup;
}

renderMessages();
