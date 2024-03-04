/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Показати через певний проміжок часу
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;
const notification = document.querySelector('.js-alert');

/*
 * Функції
 */

setTimeout(() => {
  showNotification();

  timeoutId = setTimeout(() => {
    hideNotification();
  }, 5000);
}, NOTIFICATION_DELAY);

function showNotification() {
  console.log('SHOW');
  notification.classList.add('is-visible');
}

function hideNotification() {
  console.log('HIDE');
  notification.classList.remove('is-visible');
}

notification.addEventListener('click', () => {
  hideNotification();
  clearTimeout(timeoutId);
});
