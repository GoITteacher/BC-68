import { x, y, t, sayHello } from './modules/test';
import myData from './modules/test';
import { Car } from './modules/car';
import { User } from './modules/user';
import { Product } from './modules/product';
import { saveToLS, loadFromLS } from './modules/helpers';
import refs from './modules/refs';

const car = new Car();
const user = new User();
const product = new Product();

saveToLS('key1', 20);
loadFromLS('key');
