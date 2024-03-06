const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

function getSuperhero(userValue) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    hero: userValue,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function heroTemplate(obj) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${obj.images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${obj.name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${obj.biography.fullName}</p>
      <p class="hero-bio">Publisher - ${obj.biography.publisher}</p>
      <p class="hero-bio">Alignment - ${obj.biography.alignment}</p>
      <p class="hero-bio">Gender - ${obj.appearance.gender}</p>
      <p class="hero-bio">Race - ${obj.appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${obj.powerstats.power}</span>
      <span>Strength: ${obj.powerstats.strength}</span>
      <span>Speed: ${obj.powerstats.speed}</span>
      <span>Combat: ${obj.powerstats.combat}</span>
    </div>
  </div>
</div>`;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userValue = e.target.elements.query.value;

  getSuperhero(userValue)
    .then(result => {
      const markup = heroTemplate(result);
      refs.heroEl.insertAdjacentHTML('beforeend', markup);
    })
    .catch(err => {
      console.log(err);
    });
});
