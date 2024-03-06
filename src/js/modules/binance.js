const refs = {
  formEl: document.querySelector('.js-binance-form'),
  infoEl: document.querySelector('.js-binance-info'),
};

function getPrice(userSymbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const params = new URLSearchParams({
    symbol: userSymbol,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function symbolTemplate(obj) {
  const tag = obj.symbol.toLowerCase().replace('usdt', '');
  return `<img
  class="coin-logo"
  src="https://assets.coincap.io/assets/icons/${tag}@2x.png"
/>
<p class="coin-title">${obj.symbol}</p>
<p class="coin-price">${obj.price}</p>`;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userSymbol = e.target.elements.query.value;

  getPrice(userSymbol).then(data => {
    const markup = symbolTemplate(data);
    refs.infoEl.innerHTML = markup;
  });
});
