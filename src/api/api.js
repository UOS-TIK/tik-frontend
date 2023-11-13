import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.34.125.52:8080',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('login-token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
