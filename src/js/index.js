/* function createBook(book) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options).then(res => res.json());
}

function resetBook(book, id) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/books';
  const url = `${BASE_URL}${END_POINT}/id`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options).then(res => res.json());
}

createBook({
  title: 'Hello',
}); */
