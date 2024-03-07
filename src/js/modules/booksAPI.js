const BASE_URL = 'http://localhost:3000';
const END_POINT = '/books';

export function getBooks() {
  const url = `${BASE_URL}${END_POINT}`;
  return fetch(url).then(res => res.json());
}

export function createBook(book) {
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

export function resetBook(id, book) {
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options).then(res => res.json());
}

export function updateBook(id, book) {
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(url, options).then(res => res.json());
}

export function deleteBook(id) {
  const url = `${BASE_URL}${END_POINT}/${id}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url, options);
}
