/**
 * Классы
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

/* class User {
  constructor(newName, newAge, newCity, newCountry) {
    this.name = newName;
    this.age = newAge;
    this.city = newCity;
    this.country = newCountry;
  }

  showName() {
    console.log('Name:', this.name);
  }

  showAge() {
    console.log('Age:', this.age);
  }

  showInfo() {
    console.log('\n\n-------------------');
    this.showName();
    this.showAge();
    console.log('-------------------');
  }
}

const user1 = new User('Anton', 35, 'Lviv', 'Ukraine');
const user2 = new User('Vlad', 32, 'Lviv', 'Ukraine');
const user3 = new User('Max', 32, 'Lviv', 'Ukraine');
const user4 = new User('Roman', 32, 'Lviv', 'Ukraine');

console.log(user1);
console.log(user2);
console.log(user3); */

// =====================================

/* class Car {
  #maxSpeed;
  #model;
  #year;

  constructor(model, color, maxSpeed, year, price) {
    this.#model = model;
    this.color = color;
    this.#maxSpeed = maxSpeed;
    this.#year = year;
    this.price = price;
  }
}

const car1 = new Car('Tesla model S', 'black', 200, 2020, 36000);

console.log(car1); */

// =====================================
/* 
class User {
  #age;
  #price;
  #counter = 0;
  #country = 'Ukraine';

  constructor(firstname, lastname, patronymic, age) {
    this.firstname = firstname || 'Default Firstname';
    this.lastname = lastname || 'Default Lastname';
    this.patronymic = patronymic || 'Default Patronymic';
    if (age > 0 && age < 150) {
      this.#age = age;
    }
  }

  get age() {
    return this.#age;
  }

  set age(newAge) {
    if (newAge > 0 && newAge < 150) {
      this.#age = newAge;
    }
  }

  get counter() {
    return this.#counter;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    if (value > 0) {
      this.#price = value;
    } else {
      console.log('Price must be > 0');
    }
  }

  set country(value) {
    if (country) {
      this.#country = value;
    }
  }

  get helloWorld() {
    return 'Hello World';
  }
}

const user1 = new User(undefined, undefined, undefined, 10);

user1.price = 100;
user1.price = 50;

user1.price = -10;

console.log(user1);

user1.country;
 */

// =====================================

/* class Calculator {
  static PI = 3.1415926;
  static counter = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sum() {
    Calculator.counter += 1;
    return this.x + this.y;
  }

  mult() {
    return this.x * this.y;
  }
  div() {
    return this.x / this.y;
  }
  sub() {
    return this.x - this.y;
  }

  sumWithPi() {
    return this.x + this.y + Calculator.PI;
  }
}

const calc1 = new Calculator(20, 30);
const calc2 = new Calculator(5, 1);
const calc3 = new Calculator(5, 6);

calc1.sum();
calc1.sum();
calc1.sum();

calc2.sum();
calc2.sum();

calc3.sum();
calc3.sum();

console.log(Calculator.counter); */

// =====================================

// class User {
//   static counter = 0;

//   constructor(name, age) {
//     User.counter += 1;
//     this.name = name;
//     this.age = age;
//   }

//   showName() {
//     console.log(this.name);
//   }
// }

// =====================================

/* class Calculator {
  static sum(x, y) {
    return x + y;
  }

  static div(x, y) {
    return x / y;
  }

  static mult(x, y) {
    return x * y;
  }

  static sub(x, y) {
    return x - y;
  }
}

console.log(Calculator.sum(20, 20)); */

// =====================================

/* class Car {
  static discount = 0.1;

  constructor(model, price) {
    this.model = model;
    this.price = price;
  }

  showInfo() {
    console.log('----------------------');
    console.log('Model: ', this.model);
    console.log('Price: ', this.price);
    console.log('With Discount: ', this.price * (1 - Car.discount));
    console.log('Discount:', Car.discount);
    console.log('----------------------');
  }
}
// 2022

const car1 = new Car('Model1', 20000);
const car2 = new Car('Model1', 10000);
const car3 = new Car('Model1', 50000);
const car4 = new Car('Model1', 35000);
const car5 = new Car('Model1', 25000);
const car6 = new Car('Model1', 23000);
const car7 = new Car('Model1', 45000);
const car8 = new Car('Model1', 12000);

car1.showInfo();
car2.showInfo();
car3.showInfo();
car4.showInfo();

Car.discount = 0.2;

car5.showInfo();
car6.showInfo();
car7.showInfo();
car8.showInfo(); */
