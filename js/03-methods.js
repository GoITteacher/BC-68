/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

// ==============================================

/* const obj1 = {
  name: 'Vlad',
};

const obj2 = {
  name: 'Anton',
};

const obj3 = {
  name: 'Max',
}; */

/* function foo() {
  console.log(this);
}

foo.call(obj2);
foo.call(obj1);
foo.call(obj3); */

// ==============================================

// CALL

/* const obj1 = {
  name: 'Vlad',
  showThis() {
    console.log(this.name);
  },
};

const obj2 = {
  name: 'Anton',
};

const obj3 = {
  name: 'Max',
};

obj1.showThis.call(obj3);
obj1.showThis.call(obj2);
obj1.showThis(); */

// ==============================================
// APPLY
const obj1 = {
  name: 'Vlad',
};

const obj2 = {
  name: 'Anton',
};

const obj3 = {
  name: 'Max',
};
/* 

obj1.showThis.apply(obj3, [2, 3, 5]);
obj1.showThis.apply(obj2, [4, 2, 1]); */

// ==============================================

/* function sum(r, g, b) {
  console.log(this, (r + g + b) / 3);
} */

/* 
const red = 100;
const green = 125;
const blue = 234;
sum.call(obj1, red, green, blue);
sum.apply(obj1, [red, green, blue]);
*/

/* 
const rgb = [123, 33, 63];
sum.call(obj1, ...rgb);
sum.apply(obj1, rgb); 
*/

// ==============================================

/**
 * -------------------------------
 */

/* function changeColor(color) {
  this.color = color;
}

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

changeColor.call(hat, 'red');
changeColor.call(sweater, 'black');

console.log(hat);
console.log(sweater); */

/**
 * -------------------------------
 */
// ==============================================
// BIND

/* const user1 = {
  name: 'Natali',
};

const user2 = {
  name: 'Volodymyr',
};

function foo() {
  console.log(this);
}

const copyFoo = foo.bind(user2);

copyFoo.call(user1); // const this = user2;
copyFoo.apply(user1); // const this = user2;
copyFoo(); // const this = user2; */

// ==============================================
/* function changeColor(color) {
  this.color = color;
}

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor('yellow');
changeHatColor('green');

console.log(hat); */

/**
 * -------------------------------
 */
/* const counter = {
  value: 0,
  increment(value) {
    this.value += value;
    console.log('increment -> this', this.value);
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

function updateCounter(value, operation) {
  operation(value);
}

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter); */
// ==============================================

/* const counter = {
  value: 0,

  increment() {
    this.value++;
  },
};

function updateCounter(callback) {
  callback(); //this = counter;
}

updateCounter(counter.increment.bind(counter)); */

// ==============================================

/* const user1 = {
  name: 'Anton',
}; */

/* function foo() {
  const x = 10;

  const arrow = () => {
    console.log(this);
  };

  arrow();
}

foo.call(user1); */

// ==============================================

/* const user1 = {
  name: 'Vasya',
  test() {
    const foo1 = () => {
      const foo2 = () => {
        const foo3 = () => {
          console.log(this);
        };
        foo3();
      };
      foo2();
    };
    foo1();
  },
};

const user2 = {
  name: 'Petro',
};

const user3 = {
  name: 'Kolya',
};

user1.test(); */
/* 
1 - Визначити тип функції яка викликається
- якщо звичайна то дивимось момент виклику
- якщо стрілчата то дивимось момент створення контекст бат. функції
*/

/* function foo(){
  console.log(this)
}

foo.call(user2); */
