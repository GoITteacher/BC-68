/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

/**
 * -------------------------
 */

/* const username = "Vasya";
const age = 10;
const phoneNumber = "09912312";

const myObj = { username, age, phoneNumber };

console.log(myObj); */

/* function createUser(name, age, phoneNumber) {
   const user = { name, age, phoneNumber };
  const user = {
    name: name,
    age: age,
    phoneNumber: phoneNumber,
  };

  console.log(user);
}

createUser("Vasya", 123, "34534523"); */

/**
 * -------------------------
 */

const keyPart1 = "Hello";
const keyPart2 = "World";

const obj = {
  [keyPart1 + keyPart2]: "test value",
  [10 + 10]: "test",
  [keyPart1.toUpperCase()]: "hello world",
};

console.log(obj);
