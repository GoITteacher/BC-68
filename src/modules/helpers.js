export function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

export function loadFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}
