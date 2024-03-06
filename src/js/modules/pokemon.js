const refs = {
  formEl: document.querySelector('.js-pokemon-form'),
  listEl: document.querySelector('.js-pokemon-list'),
};

function getPokemon(pokemonName) {
  const BASE_URL = 'https://pokeapi.co/api/v2';
  const END_POINT = '/pokemon';
  const url = `${BASE_URL}${END_POINT}/${pokemonName}`;
  return fetch(url).then(res => res.json());
}

function pokemonTemplate(pokemon) {
  const {
    height,
    weight,
    id,
    name,
    base_experience,
    sprites: { front_default, back_default },
  } = pokemon;

  return `<div class="pokemon-card pokemon-item">
  <h1 class="pokemon-name">${name} - Pokemon Details</h1>
  <img data-back="${back_default}" data-front="${front_default}"
    class="pokemon-image js-pocimage"
    src="${front_default}"
    alt="${name}"
  />

  <h2 class="section-title">Basic Information</h2>
  <ul class="info-list">
    <li>ID: ${id}</li>
    <li>Height: ${height} decimetres</li>
    <li>Weight: ${weight} grams</li>
    <li>Base Experience: ${base_experience}</li>
  </ul>
</div>`;
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const pokemonName = e.target.elements.query.value;

  getPokemon(pokemonName).then(res => {
    const markup = pokemonTemplate(res);
    refs.listEl.insertAdjacentHTML('beforeend', markup);
  });
});
