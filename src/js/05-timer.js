/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 *
 * - клас має містити методи start stop
 * - у конструкторі клас має приймати метод tick та викликати його кожну секунду після виклику методу start
 * виклик методу stop - повинен зупинити виклики функції tick
 * у функцію tick треба передавати різницю між поточним часом та початковим часом
 */

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');
