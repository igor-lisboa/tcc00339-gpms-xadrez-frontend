import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3333/',
  timeout: 90000
});

export default http; 