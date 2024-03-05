/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const resultElem = document.querySelector('.result');

function createPromise(delay) {
  const random = Math.random();
  const isPositiveSmile = random > 0.5;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPositiveSmile) {
        resolve('🤑');
      } else {
        reject('👿');
      }
    }, delay);
  });

  return promise;
}

startBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  const promises = []; //3

  for (let i = 0; i < 3; i++) {
    container.children[i].textContent = '';
    const promise = createPromise((i + 1) * 1000);

    promise
      .then(smile => {
        container.children[i].textContent = smile;
      })
      .catch(smile => {
        container.children[i].textContent = smile;
      });

    promises.push(promise);
  }

  Promise.allSettled(promises).then(result => {
    const isWinner = result
      .map(obj => {
        return obj.value || obj.reason;
      })
      .every(smile => smile === '🤑');

    resultElem.textContent = isWinner ? 'Winner!' : 'Loser!';
  });
}
