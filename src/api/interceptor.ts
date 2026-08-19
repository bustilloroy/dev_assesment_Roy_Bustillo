import axios from 'axios';

export const interceptor = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})