const refs = {
  formEl: document.querySelector('.js-quotes-form'),
  containerQuotes: document.querySelector('.js-container-quotes'),
};

function getRandomQuotes(lang) {
  const BASE_URL = 'https://quotes15.p.rapidapi.com';
  const END_POINT = '/quotes/random/';
  const params = new URLSearchParams({
    language_code: lang || 'en',
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function quotesTemplate(obj) {
  return `<div class="card quote">
  <h4 class="quote-name">${obj.originator.name}</h4>
  <p class="quote-body">
   ${obj.content}
  </p>
  <ul class="quote-tags">
   <li>${obj.tags.join('</li><li>')}</li>
  </ul>
</div>`;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const lang = e.target.elements.query.value;

  getRandomQuotes(lang).then(result => {
    const markup = quotesTemplate(result);
    refs.containerQuotes.insertAdjacentHTML('beforeend', markup);
  });
});
