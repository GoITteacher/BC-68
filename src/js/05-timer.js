/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 *
 * - клас має містити методи start stop
 * - у конструкторі клас має приймати метод tick та викликати його кожну секунду після виклику методу start
 * виклик методу stop - повинен зупинити виклики функції tick
 * у функцію tick треба передавати різницю між поточним часом та початковим часом
 */

// ===============================

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

// =======================================

class Timer {
  constructor(callback) {
    this.tick = callback;
    this.intervalId = null;
    this.isActive = false;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;

    const initTime = Date.now();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const diff = currentTime - initTime;
      this.tick(diff);
    }, 1000);
  }

  stop() {
    console.log('stop');
    this.isActive = false;
    clearInterval(this.intervalId);
  }
}
const timer = new Timer(renderTime);

// =========================================

startBtn.addEventListener('click', () => {
  timer.start();
});

stopBtn.addEventListener('click', () => {
  timer.stop();
});

function renderTime(diff) {
  const time = convertMsToTime(diff);
  clockface.innerHTML = time;
}

// ========================================

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds,
  )}`;
}
