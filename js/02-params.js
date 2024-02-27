/**
 * Деструктуризація об'єкта в параметрах функції
 */

// ================================================

/* function showUser({ name, age, phoneNumber, isStudent, isAdmin }) {
  console.log('Name:', name);
  console.log('Age:', age);
  console.log('PhoneNumber:', phoneNumber);
  console.log('isStudent:', isStudent);
  console.log('isAdmin:', isAdmin);
}

const params = {
  isStudent: true,
  isAdmin: true,
  age: 24,
  phoneNumber: '123123',
  name: 'Vasya',
};

showUser(params); */

// ================================================

function showUser({ name, age }) {
  console.log(name, age);
}

showUser({
  name: 'Vasya',
  age: 23,
});

showUser({
  name: 'Petya',
  age: 26,
});
