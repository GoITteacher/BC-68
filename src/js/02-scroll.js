import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchArticles } from './modules/newsApi2';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.js-target'),
  loadElem: document.querySelector('.js-loader'),
};
// =========================================================
let maxPage = 1;
let page = 1;
let query = '';

// =========================================================
refs.formElem.addEventListener('submit', async e => {
  e.preventDefault();
  page = 1;
  query = e.target.elements.query.value;
  refs.articleListElem.innerHTML = '';

  showLoader();
  const data = await fetchArticles(query, page);
  renderArticles(data.articles);
  maxPage = data.total_pages;

  hideLoader();
  updateObserverStatus();
});

async function loadMore() {
  console.log('LOAD MORE');
  page += 1;

  showLoader();
  const data = await fetchArticles(query, page);
  renderArticles(data.articles);

  hideLoader();
  updateObserverStatus();
}

// =========================================================

function articleTemplate(article) {
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${article.media}"
    alt="${article.title}"
  />
  <h3 class="card-title">
    ${article.title}
  </h3>
  <p class="card-desc">
  ${article.summary}
  </p>
  <div class="card-footer">
    <span>${article.author}</span>
    <span>${article.published_date}</span>
  </div>
</li>`;
}

function articlesTemplate(arr) {
  return arr.map(articleTemplate).join('');
}

function renderArticles(arr) {
  const markup = articlesTemplate(arr);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
// =========================================================
const options = {
  rootMargin: '1500px',
  threshold: 0,
};

const observer = new IntersectionObserver(onLoadMoreObserve, options);

function onLoadMoreObserve(entries) {
  const entry = entries[0];
  if (entry.isIntersecting === true) {
    loadMore();
  }
}

// =========================================================

function updateObserverStatus() {
  if (page >= maxPage) {
    observer.unobserve(refs.targetElem);
    iziToast.show({ message: 'The End!' });
  } else {
    observer.observe(refs.targetElem);
  }
}

function showLoader() {
  refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loadElem.classList.add('hidden');
}
// =========================================================
