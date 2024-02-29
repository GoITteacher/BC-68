// =================================================

/* import { x, y, t, sayHello } from './modules/test';
import myData from './modules/test';
import { Car } from './modules/car';
import { User } from './modules/user';
import { Product } from './modules/product';
import { saveToLS, loadFromLS } from './modules/helpers';
import refs from './modules/refs';
import * as mySuperData from './modules/test'; */

/* const car = new Car();
const user = new User();
const product = new Product();
saveToLS('key1', 20);
loadFromLS('key');
 */

// console.log(mySuperData);

// =================================================
// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// =================================================

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// =================================================

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// var lightbox = new SimpleLightbox('.gallery a', {
//   /* options */
// });
// ===================================================

// import { v4 as uuidv4 } from 'uuid';

// console.log(uuidv4());
// ===================================================

// import { faker } from '@faker-js/faker';

/* function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

const user = createRandomUser();

console.log(user);
 */

// console.log(faker.internet.password());

// =============================================

// import { x1, x2, x3, x4, x5, x6 } from './js/constants';

// import * as myConst from './js/constants';

// console.log(myConst);

// ==============================================

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  nav: true,
  close: false,
  loop: false,
});
