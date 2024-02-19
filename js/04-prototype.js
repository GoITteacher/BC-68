/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */
// ========================================

/* const x = 10;
const y = 'Hello';
const c = true;
const a = [10, 20, 30];
const b = { name: 'Vasya' };

console.log(x.toString());
console.log(y.toString());
console.log(c.toString());
console.log(a.toString());
console.log(b.toString()); */
// ========================================

/* const a = {
  name: 'ObjA',
  x1: 10,
  x2: 20,
};

const b = {
  name: 'ObjB',
  y1: 40,
  y2: 50,
  __proto__: a,
};

const c = {
  name: 'ObjC',
  t1: 40,
  t2: 50,
  __proto__: b,
};

console.log(c.hasOwnProperty('t1')); // t
console.log(c.hasOwnProperty('name')); // t
console.log(c.hasOwnProperty('y1')); // f

console.log(b.hasOwnProperty('t1')); // f
console.log(b.hasOwnProperty('name')); // t
console.log(b.hasOwnProperty('y1')); // t */
// ========================================

/* const animal = {
  legs: 4,
  color: 'black',
};

const dog = Object.create(animal);
const cat = Object.create(animal);

dog.legs = 55;

console.log(dog.color);

console.log(dog.hasOwnProperty('color')); */

/* console.log(dog);
console.log(dog.name);
console.log(dog.legs);
console.log(dog.hasOwnProperty('name'));
console.log(dog.hasOwnProperty('legs')); */

//==============================================

const a = {
  name: 'ObjA',
  x1: 10,
  x2: 20,
};

const b = {
  name: 'ObjB',
  y1: 40,
  y2: 50,
  __proto__: a,
};

const c = {
  name: 'ObjC',
  t1: 40,
  t2: 50,
  __proto__: b,
};

/* for (const key in c) {
  if (c.hasOwnProperty(key)) {
    console.log(key);
  }
} */

/**
 * ----------------------------------------
 */
// const objC = { c: 'objC prop' };

// const objB = {__proto__:objC, b:'objB prop'}
/* const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty('a'));
console.log(objA.a);

console.log(objA.hasOwnProperty('b'));
console.log(objA.b);

console.log(objA.hasOwnProperty('c'));
console.log(objA.c);

console.log(objA.hasOwnProperty('x'));
console.log(objA.x); */
