import {
  getBooks,
  createBook,
  resetBook,
  updateBook,
  deleteBook,
} from './modules/booksAPI';

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
// =========================================

refs.createFormElem.addEventListener('submit', onBookCreate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.deleteFormElem.addEventListener('submit', onBookDelete);

async function onBookCreate(e) {
  e.preventDefault();

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
    rating: 5,
    price: 100,
    img: `https://source.unsplash.com/1280x720/?random=${Math.random()}&book`,
  };

  const newBook = await createBook(book);
  const markup = bookTemplate(newBook);
  refs.bookListElem.insertAdjacentHTML('beforeend', markup);

  e.target.reset();
}

async function onBookReset(e) {
  e.preventDefault();

  const id = e.target.elements.bookId.value;

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
    rating: 5,
    price: 100,
    img: `https://source.unsplash.com/1280x720/?random=${Math.random()}&book`,
  };

  try {
    const updatedBook = await resetBook(id, book);
    const markup = bookTemplate(updatedBook);
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookUpdate(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    const myKey = key.replace('book', '').toLowerCase();
    if (value) {
      book[myKey] = value;
    }
  });
  try {
    const updatedBook = await updateBook(id, book);
    const markup = bookTemplate(updatedBook);
    const oldBook = document.querySelector(`[data-id="${id}"]`);
    oldBook.insertAdjacentHTML('afterend', markup);
    oldBook.remove();
  } catch (err) {
    console.log(err);
  }

  e.target.reset();
}

async function onBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;

  await deleteBook(id);
  const oldBook = document.querySelector(`[data-id="${id}"]`);
  oldBook.remove();

  e.target.reset();
}
// =========================================

getBooks().then(books => {
  const markup = booksTemplate(books);
  refs.bookListElem.innerHTML = markup;
});

function bookTemplate(book) {
  const { id, img, title, author, desc, price, rating } = book;

  return `<li class="book-item card" data-id="${id}">
  <img class="book-img" src="${img}" alt="" />

  <h5 class="book-title">${title} - ${id}</h5>
  <h6>Author: ${author}</h6>
  <p class="book-desc">${desc}</p>

  <div class="book-info">
    <span>Price: ${price}</span>
    <span>Rating: ${rating}</span>
  </div>
</li>`;
}

function booksTemplate(arr) {
  return arr.map(bookTemplate).join('');
}
