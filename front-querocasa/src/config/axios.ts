import axios from 'axios';

const api = axios.create({
  baseURL: 'baseURLgoeshere'
});

export default api;