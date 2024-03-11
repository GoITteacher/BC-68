import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'http://localhost:3000/users',
});

class UsersAPI1 {
  constructor() {
    this.BASE_URL = 'http://localhost:3000';
    this.END_POINT = '/users';
    this.URL = `${this.BASE_URL}${this.END_POINT}`;
  }

  getUsers() {
    const url = this.URL;
    return fetch(url).then(res => res.json());
  }

  createUser(user) {
    const url = this.URL;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  updateUser({ id, ...user }) {
    const url = `${this.URL}/${id}`;

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  resetUser({ id, ...user }) {
    const url = `${this.URL}/${id}`;

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    return fetch(url, options).then(res => res.json());
  }
  removeUser(id) {
    const url = `${this.URL}/${id}`;

    const options = {
      method: 'DELETE',
    };

    return fetch(url, options).then(res => res.json());
  }
}

class UsersAPI {
  async getUsers() {
    const res = await axios.get('');
    return res.data;
  }
  async createUser(user) {
    const res = await axios.post('', user);
    return res.data;
  }
  async updateUser({ id, ...user }) {
    const res = await axios.patch(`/${id}`, user);
    return res.data;
  }
  async resetUser({ id, ...user }) {
    const res = await axios.put(`/${id}`, user);
    return res.data;
  }
  async removeUser(id) {
    const res = await axios.delete(`/${id}`);
    return res.data;
  }
}

export const usersAPI = new UsersAPI();
