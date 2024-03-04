# План заняття

1. Пограємо в Kahoot
2. Познайомимось з поняттям асинхронності в JavaScript

- Розберемо планування: window.setTimeout() и window.setInterval() (практика
  01-timeout.js і 02-interval.js)
- Розв’яжемо практичну задачу на сповіщення (практика 03-notification.js)

3. Розберемо роботу з датой і часом

- Створення дати
- Різниця часу
- Метод Date.now() і new Date().getTime() (практика 04-date.js)

4. Розв’яжемо практичну задачу на створення таймеру (практика 05-timer.js)

5. Що на вас чекатиме на наступному занятті? Ми поговоримо про проміси і
   промісифікацію.

```js
getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
```
