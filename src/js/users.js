import { usersAPI } from './modules/usersAPI';

// ===================================================
const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};

// ============================================================

refs.createUserForm.addEventListener('submit', onCreateUser);
refs.updateUserForm.addEventListener('submit', onUpdateUser);
refs.resetUserForm.addEventListener('submit', onResetUser);
refs.deleteUserForm.addEventListener('submit', onDeleteUser);

function onCreateUser(e) {
  e.preventDefault();

  const user = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    user[key] = value;
  });

  usersAPI.createUser(user).then(newUser => {
    const markup = userTemplate(newUser);
    refs.userListElem.insertAdjacentHTML('afterbegin', markup);
  });

  e.target.reset();
}

function onUpdateUser(e) {
  e.preventDefault();
  const user = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    if (value) user[key] = value;
  });

  usersAPI.updateUser(user).then(updatedUser => {
    const oldUser = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(updatedUser);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  e.target.reset();
}

function onResetUser(e) {
  e.preventDefault();
  const user = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    user[key] = value;
  });

  usersAPI.resetUser(user).then(updatedUser => {
    const oldUser = document.querySelector(`[data-id="${user.id}"]`);
    const markup = userTemplate(updatedUser);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });

  e.target.reset();
}

function onDeleteUser(e) {
  e.preventDefault();
  const id = e.target.elements.id.value;
  usersAPI.removeUser(id).then(() => {
    const oldUser = document.querySelector(`[data-id="${id}"]`);
    oldUser.remove();
  });
  e.target.reset();
}

// ============================================================

usersAPI.getUsers().then(users => {
  const markup = usersTemplate(users);
  refs.userListElem.innerHTML = markup;
});

function userTemplate(user) {
  return `<li class="card user-item" data-id="${user.id}">
  <img
    src="https://source.unsplash.com/720x1280/?random=${user.id}&girl,portret,celebrity"
    alt="#"
    class="user-avatar"
  />
  <h3 class="user-title">${user.id} - ${user.name}</h3>
  <p>Email: ${user.email}</p>
  <p>Phone: ${user.phone}</p>
  <button class="btn button">DELETE</button>
</li>`;
}

function usersTemplate(arr) {
  return arr.map(userTemplate).join('');
}

// ============================================================
