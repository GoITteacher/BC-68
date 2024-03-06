import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

function getComments(userPostID) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/comments';
  const params = new URLSearchParams({
    postId: userPostID,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url).then(res => res.json());
}

/* 
function getUsers(userName) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/users';
  const params = new URLSearchParams({
    username: userName,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  const options = {
    headers: {
      test1: 'qwdawd',
    },
  };

  return fetch(url, options).then(res => res.json());
} 
*/

// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
