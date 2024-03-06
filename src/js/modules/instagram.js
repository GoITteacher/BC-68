const refs = {
  wrapperInstagram: document.querySelector('.js-inst-wrap'),
  searchInstagramEl: document.querySelector('.js-inst-form'),
};

function getProfileIfo(username) {
  const BASE_URL = 'https://instagram191.p.rapidapi.com/v3';
  const END_POINT = '/user/details-by-username';
  const params = new URLSearchParams({ username });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'instagram191.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function infoTemplate({ data: { user } }) {
  return `
<div class="username">${user.full_name}</div>
<div class="biography">${user.biography}</div>
<div>${user.id}<div>
</div>`;
}

refs.searchInstagramEl.addEventListener('submit', e => {
  e.preventDefault();
  const username = e.target.elements.query.value;

  getProfileIfo(username).then(user => {
    const markup = infoTemplate(user);
    refs.wrapperInstagram.innerHTML = markup;
  });
});
