// async function foo() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await response.json();
//   console.log(json);

//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();
//   console.log(data);
// }

// ==============================================

/* async function task1() {}

const task2 = async () => {};

const obj = {
  async showName() {},
};

class User {
  async showName() {}
}

[].map(async ()=>{})

document.addEventListener('click', async ()=>{}) */

// ==============================================
// async function foo2() {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const response = await fetch(url);
//   const data = await response.json();

//   console.log(data);
// }

// foo2();

// function createPromise(delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }

// async function test() {
//   console.log('START');
//   const x = await createPromise(3000);
//   console.log(x);
//   const y = await createPromise(5000);
//   console.log(y);
//   console.log('END');
// }

// test();

// ========================================
// function createPromise(delay) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }

// async function test() {
//   /* createPromise(2000).then(()=>{
//     console.log('then')
//   }).catch(()=>{
//     console.log('catch')
//   }) */

//   try {
//     const data = await createPromise(200);
//     console.log('then');
//   } catch {
//     console.log('catch');
//   }
// }

// ========================================
/* async function getUserById(id) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = `/users`;
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const result = await fetch(url);
  const user = await result.json();
  return user;
}

const user1 = getUserById(1);
console.log(user1); */

// ========================================

// async function getArr() {
//   const arr = [1, 2, 3, 4, 5, 6];
//   return arr;
// }

// const result = getArr();
// console.log(result);

// async function foo() {
//   const response = await fetch();
// }
// ================================================

import axios from 'axios';

// function getSuperHero(hero) {
//   const BASE_URL = '';
//   const END_POINT = '';
//   const url = `${BASE_URL}${END_POINT}`;

//   const params = {
//     q: hero,
//   };

//   const headers = {};

//   axios.get(url, { params, headers });
// }

// =======================

// axios.request({
//   method: 'patch',
//   url: '/user',
//   baseURL: 'https://some-domain.com/api/',
//   params: {},
//   headers: {},
// });

// =================================

function getUser(id) {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  return fetch(url).then(res => res.json());
}

/* async function foo() {
  const promises = [];
  for (let i = 1; i < 10; i++) {
    const userPromise = getUser(i);
    promises.push(userPromise);
  }
  const result = await Promise.all(promises);
  console.log(result);
}
foo(); */

/* async function foo() {
  const user1 = getUser(1);
  const user2 = getUser(2);
  const user3 = getUser(3);
  const user4 = getUser(4);

  const promises = [user1, user2, user3, user4];
  const result = await Promise.all(promises);
  console.log(result);
}
foo(); */
