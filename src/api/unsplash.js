import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID J6lVNLCstwrW3kZIJqyFLg9YBVDV-N8P9juwSQdAe5A'
  }
});