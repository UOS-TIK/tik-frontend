import axios from 'axios';

const api = axios.create({
  baseURL: 'http://15.164.170.148:8080',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('login-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
