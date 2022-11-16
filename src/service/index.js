import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:4001/users/',
  });

export default api; 

export const apiAnime = axios.create({
  baseURL: 'https://kitsu.io/api/edge/anime'
})