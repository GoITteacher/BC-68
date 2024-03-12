import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getArticles } from './modules/newsAPI';

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.js-loader'),
};
// ==============================================

let page;
let query;
let maxPage;

// ===============================================
refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

async function onFormSubmit(e) {
  e.preventDefault();
  page = 1;
  query = e.target.elements.query.value.trim();
  refs.articleListElem.innerHTML = '';
  showLoader();

  try {
    const data = await getArticles(query, page);
    renderArticles(data.articles);
    maxPage = Math.ceil(data.totalResults / 10);
  } catch (err) {
    console.log(err);
  }

  hideLoader();
  updateBtnStatus();
  e.target.reset();
}

async function onLoadMoreClick(e) {
  page += 1;

  showLoader();
  try {
    const data = await getArticles(query, page);
    renderArticles(data.articles);
    scroll();
  } catch (err) {
    console.log(err);
  }
  hideLoader();

  updateBtnStatus();
}
// ==========================================

function articleTemplate(article) {
  const { urlToImage, title, description, author, publishedAt } = article;
  return `<li class="card news-card">
  <img loading="lazy"
    class="news-image"
    src="${urlToImage}"
    alt="${title}"
  />
  <h3 class="card-title">
    ${title}
  </h3>
  <p class="card-desc">
  ${description}
  </p>
  <div class="card-footer">
    <span>${author}</span>
    <span>${publishedAt}</span>
  </div>
</li>`;
}

function articlesTemplate(articles) {
  return articles.map(articleTemplate).join('');
}

function renderArticles(articles) {
  const markup = articlesTemplate(articles);
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
// ==========================================
function showLoader() {
  refs.loadElem.classList.remove('hidden');
}

function hideLoader() {
  refs.loadElem.classList.add('hidden');
}

function showLoadMoreBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function updateBtnStatus() {
  if (page >= maxPage) {
    hideLoadMoreBtn();
  } else {
    showLoadMoreBtn();
  }
}

function scroll() {
  const cardElem = refs.articleListElem.firstElementChild;
  const height = cardElem.getBoundingClientRect().height;
  scrollBy({
    behavior: 'smooth',
    top: height,
  });
}
// ==========================================
