/*
 * Промісифікація:
 * - Функція, яка повертає проміс
 */

// ================================================

/* function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(2000, true, 'Promise1');
const p2 = createPromise(1000, false, 'Promise2');
const p3 = createPromise(5000, false, 'Promise3');

p1.then(onFulfilled).catch(onRejected);
p2.then(onFulfilled).catch(onRejected);
p3.then(onFulfilled).catch(onRejected);

function onFulfilled(value) {
  console.log('✅', value);
}
function onRejected(value) {
  console.log('❌', value);
} */
// ================================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArray() {
//   const arr = [1, 2, 3, 3, 45, 6, 7, 8];
//   return Promise.reject(arr);
// }
// const result = getArray();
// console.log(result);
// ===============================================

/* function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
} */

/* const promise = createPromise(1000, true, 1000);

promise

  .then(value => {
    if (value < 1000) return Promise.reject();

    console.log(value);
    return value - 100;
  })

  .then(value => {
    if (value < 1000) return Promise.reject();

    console.log(value);
    return value - 100;
  })

  .then(value => {
    if (value < 1000) return Promise.reject();
    console.log(value);
    return value - 100;
  })

  .then(value => {
    if (value < 1000) return Promise.reject();

    console.log(value);
    return value - 100;
  })

  .catch(value => {
    console.log('Value must be > 1000');
  });
 */

// ==============================================
/* function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const myNum = createPromise(1000, true, 25);

function getP(numPromise) {
  const result = numPromise.then(value => {
    return value * 2;
  });

  return result;
}

const newMyNum = getP(myNum);

newMyNum.then(res => {
  console.log(res);
}); */

// ==============================================

/* function createPromise(delay, isActive, value) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });

  return promise;
}

const p1 = createPromise(3000, true, 'promise1');
const p2 = createPromise(1000, false, 'promise2');
const p3 = createPromise(5000, false, 'promise3');
const p4 = createPromise(2000, false, 'promise4');
const p5 = createPromise(4000, true, 'promise5');
const p6 = createPromise(6000, true, 'promise6');

const promises = [p1, p2, p3, p4, p5, p6]; */

// ===================================
/* for (const promise of promises) {
  promise
    .then(value => {
      console.log('✅', value);
    })
    .catch(value => {
      console.log('❌', value);
    });
} */
// ===================================

// Promise.all()
// Promise.race()
// Promise.allSettled()

// Promise.all(promises)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(err => {
//     console.log('Error', err);
//   });

// Promise.allSettled(promises).then(result => {
//   console.log(result);
// });

// Promise.race(promises)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(result => {
//     console.log(result);
//   });
