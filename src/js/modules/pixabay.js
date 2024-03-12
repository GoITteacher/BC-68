import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '11070675-9db3ad99120a3eae94c3d42ec',
  },
});

export async function getArticles(query, userPage) {
  const params = {
    q: query,
    per_page: 10,
    page: userPage,
  };

  const response = await axios.get('', { params });
  return response.data;
}
