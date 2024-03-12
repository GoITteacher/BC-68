import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://newsapi.org/v2',
  params: {
    apiKey: 'c8747511a2c34730a83caaff4f3693e7',
  },
});

export async function getArticles(query, userPage) {
  const params = {
    q: query,
    language: 'en',
    pageSize: 10,
    page: userPage,
  };

  const response = await axios.get('/everything', { params });
  return response.data;
}
