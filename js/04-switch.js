/**
 * Оператор switch
 */

/* const languages = "Vue";

switch (languages) {
  case "C++":
    console.log("Game");
    break;

  case "JS":
  case "React":
  case "Vue":
    console.log("Frontend");
    break;

  case "Java":
    console.log("Backend");
    break;

  default:
    console.log("Design");
} */

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

/* const daysUntilDeadline = 5;

switch (daysUntilDeadline) {
  case 0:
    console.log("Today");
    break;

  case 1:
    console.log("Tomorrow");
    break;

  case 2:
    console.log("Overmorrow");
    break;

  default:
    console.log("Date in the future");
} */

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 2;

let message = "";

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 3:
    message = "Посылка будет отправлена сегодня";
    break;

  default:
    message = "Вам перезвонит менеджер";
}

console.log(message);
