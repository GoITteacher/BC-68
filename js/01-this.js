/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/* function foo() {
  console.log(this);
}

foo(); */

/* const cat = {
  name: 'Marty',
  scratch() {
    console.log(this);
  },
};

const dog = {
  name: 'Lord',
  sayWoof() {
    console.log(this);
  },
}; */

/**
 * Глобальний контекст
 */

/* function foo() {
  console.log(this);
}

foo(); */

/**
 * Контекст методу об'єкта
 */

/* const user1 = {
  name: 'Borys',
  showName() {
    console.log(this.name);
  },
};

const user2 = {
  name: 'Roman',
  showName() {
    console.log(this.name);
  },
};

const user3 = {
  name: 'Max',
  showName() {
    console.log(this.name);
  },
};

user1.showName();
user2.showName();
user3.showName(); */

/**
 * Контекст методу об'єкта, але оголошено окремо.
 */
/* 
function showName() {
  console.log(this.name);
}

const user1 = {
  name: 'Max',
  showName,
};
const user2 = {
  name: 'Yaroslav',
  showName,
};
const user3 = {
  name: 'Anton',
  showName,
};

user3.showName(); */

/**
 * Виклик без контексту але оголошено в об'єкті.
 */

/* const user1 = {
  name: 'Vlad',
  foo() {
    console.log(this);
  },
};

const copyFoo = user1.foo;

const user2 = {
  name:'Borys',
  foo: copyFoo
}

user2.foo(); */

/* const obj = {
  showThis() {
    console.log(this);
  },
};

const user1 = {
  showThis: obj.showThis,
};

const showThis = user1.showThis;

obj.showThis(); // const this = obj;
user1.showThis(); // const this = user1;
showThis(); // const this = undefined; */

/**
 * Контекст у callback-функціях
 */

/* 
function foo1(callback) {
  obj.callback()
}
 */
