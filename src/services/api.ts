import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lum-rest.herokuapp.com',
})

export default api;