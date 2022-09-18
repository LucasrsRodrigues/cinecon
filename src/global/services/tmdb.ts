import axios from 'axios';

const tmdb = axios.create({
  // baseURL: 'https://api.themoviedb.org/3/movie'
  baseURL: 'https://api.themoviedb.org/3/'
});

// ?api_key=bf7da6ff49154540258b4a7d23299ead

export default tmdb;