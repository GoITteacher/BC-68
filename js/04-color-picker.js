let colorPalette = [];
const LENGTH = 8;

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < LENGTH; i++) {
    let hex = getRandomColor();
    let color = {
      hex,
      rgb: hexToRgb(hex),
    };

    items.push(color);
  }

  colorPalette = [...items];
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5, 7), 16);
  return `${red}, ${green}, ${blue}`;
}

createPaletteItems();

// ===========================================================
const refs = {
  itemList: document.querySelector('.js-colors-box'),
  btnReloadColor: document.querySelector('.js-reload-color'),
  // modalElement: document.querySelector('.modal'),
  // backdropElem: document.querySelector('.js-backdrop'),
};
// ===========================================================
const markup = colorsTemplate(colorPalette);
refs.itemList.innerHTML = markup;

refs.btnReloadColor.addEventListener('click', () => {
  createPaletteItems();
  const markup = colorsTemplate(colorPalette);
  refs.itemList.innerHTML = markup;
});

function colorTemplate(colorObj) {
  return `<li class="color-item">
  <button class="color-body" style="background-color:${colorObj.hex};"></button>
  <div class="color-footer">
      <div>HEX: ${colorObj.hex}</div>
      <div>RGB: (${colorObj.rgb})</div>
      <div></div>
  </div>
</li>`;
}

function colorsTemplate(arr) {
  return arr.map(colorTemplate).join('\n\n');
}

// ===========================================================

refs.itemList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const color = e.target.style.backgroundColor;

  const instance = basicLightbox.create(
    `<div class="modal" style="background-color: ${color};"></div>`,
  );

  instance.show();
});
