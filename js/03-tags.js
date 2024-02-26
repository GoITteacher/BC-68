let refs = {
  firstTagsList: document.querySelector('.tags-box[data-group="group-1"]'),
  secondTagsList: document.querySelector('.tags-box[data-group="group-2"]'),
};

/* refs.firstTagsList.addEventListener('click', onFirstTagListClick);
function onFirstTagListClick(e) {
  if (e.target === e.currentTarget) return;

  const liElem = e.target.closest('li');

  liElem.classList.toggle('active');
} */

/* refs.secondTagsList.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;

  const prevActiveElem = refs.secondTagsList.querySelector('.active');
  prevActiveElem.classList.remove('active');

  const liElem = e.target.closest('.tag-item');
  liElem.classList.add('active');
}); */
