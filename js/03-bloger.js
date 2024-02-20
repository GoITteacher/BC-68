/**
 * Напиши клас User для створення об'єкта блогера з наступними властивостями:
 *  - email - пошта, рядок
 * - age - вік, число
 * - numberOfPosts - кількість постів, число
 * - topics - масив тем на яких спеціалізується блогер
 *
 * Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.
 *
 * - Додай метод getInfo(), який, повертає рядок: User ${email} is ${age} years old and has ${numPosts} posts.
 * - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

class User {
  constructor(options) {
    this.email = options.email;
    this.age = options.age;
    this.numberOfPosts = options.numberOfPosts;
    this.topics = options.topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const options = {
  age: 24,
  topics: ['tech', 'cooking'],
  name: 'mango@mail.com',
  numberOfPosts: 20,
};

const mango = new User(options);
