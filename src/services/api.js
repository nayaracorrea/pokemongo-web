import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokemon-go1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': 'a8e2665422mshc6e01b4ee971c8bp176ad3jsndd6e24a1d877',
    'x-rapidapi-host': 'pokemon-go1.p.rapidapi.com'
  }
});

export default api;