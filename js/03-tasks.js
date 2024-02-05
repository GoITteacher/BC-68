/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

/* function formatTime(hours, minutes) {
  let timeString;

  if (minutes === 0) {
    timeString = `${hours}г.`;
  } else {
    timeString = `${hours}г. ${minutes}хв.`;
  }

  console.log(timeString);
} */

/* function formatTime(hours, minutes) {
  let timeString = `${hours}г.`;

  if (minutes > 0) {
    timeString += ` ${minutes} хв`;
  }

  console.log(timeString);
} */

/* function formatTime(hours, minutes) {
  let timeString = `${hours}г.`;

  timeString += minutes > 0 ? ` ${minutes} хв` : "";

  console.log(timeString);
} */

// formatTime(14, 12);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

/* const daysUntilDeadline = 0;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("OverTomorrow");
} else {
  console.log("Date in the future");
} */
