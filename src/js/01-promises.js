/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// ========================================

/* const p1 = new Promise((resolve, reject) => {
  const random = Math.random();
  const isActive = random > 0.5; // false || true

  setTimeout(() => {
    if (isActive) {
      resolve(random);
    } else {
      reject(random);
    }
  }, 100);
}); */

// ========================================

//  p1.then(onFulfilled, onRejected);

/* function onFulfilled(message) {
  console.log(message, '✅ - Няма-няма');
}

function onRejected(message) {
  console.log(message, '❌ - Горечко');
} */

// ========================================
//
//
//
// =========================================

// p1.then(onFulfilled).catch(onRejected);

/* p1.then(message => {
  console.log(message, '✅ - Няма-няма');
})
  .catch(message => {
    console.log(message, '❌ - Горечко');
  })
  .finally(() => {
    console.log('The end!');
    console.log('The end!');
    console.log('The end!');
    console.log('The end!');
    console.log('The end!');
    console.log('The end!');
  }); */

// =========================================

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

const p1 = new Promise((resolve, reject) => {
  const random = Math.random();
  const isActive = random > 0.5; // false || true

  setTimeout(() => {
    if (isActive) {
      resolve(random);
    } else {
      reject(random);
    }
  }, 100);
});

p1.then(value1 => {
  console.log(value1);
  console.log(helloWorld);
  return 10;
})
  .then(value2 => {
    console.log(value2);
    if (true) return Promise.reject();
    return 20;
  })
  .then(value3 => {
    console.log(value3);
    return 30;
  })
  .then(value4 => {
    console.log(value4);
    return 40;
  })
  .catch(error => {
    console.log('Все ок!');
  });
