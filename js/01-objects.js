/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// -----------------------------------
/* const user = {
  username: "Max",
  age: 21,
  bio: "---",
  phoneNumber: "09921233",
  isStudent: false,
  friends: ["Roman", "Mila", "Valera"],

  address: {
    city: "Dnipro",
    country: "Ukraine",
    street: "Shmidta",
    location: {
      x: "1231234234",
      y: "2342342342",
    },
  },
}; */

/**
 * -----------------------------------
 */

/* const user = {
  username: "Max",
  age: 20,
  isStudent: 30,
  address: {
    city: "Dnipro",
    country: "Ukraine",
  },
};

console.log(user.username);
console.log(user.age);
console.log(user.isStudent);

console.log(user.address.city); */
/**
 * -----------------------------------
 */

/* const user = {
  username: "Max",
  age: 20,
  isStudent: 30,
  address: {
    city: "Dnipro",
    country: "Ukraine",
  },
};

console.log(user.username);
console.log(user["username"]);

console.log(user.address.city);
console.log(user.address["city"]);
console.log(user["address"].city);
console.log(user["address"]["city"]); */

// -----------------------------------

/* const robot = {
  name: "Electronic",
  age: 1,
  model: "S",
};

robot.name = "SuperRobot";
robot.age = 10;
robot["model"] = "E";

robot.type = "Sport";
robot["hello"] = "Sport";

console.log(robot.test); */

// -----------------------------------

/* const user = {
  username: "Max",
  age: 20,
  isStudent: 30,
  address: {
    city: "Dnipro",
    country: "Ukraine",
  },
};

const key = prompt("Enter your key"); // key = 'age'
console.log(key);
user[key] = "HELLO WORLD";

console.log(user); */
