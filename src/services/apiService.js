import axios from 'axios'
import { URL, CHARACTERS_URL, COMICS_URL, CREATORS_URL } from '../utils/url';

axios.defaults.baseURL = URL;

const ENDPOINTS = {
    characters: CHARACTERS_URL,
    comics: COMICS_URL,
    creators: CREATORS_URL
}

export const getCharacters = ()=>{
    return axios.get(ENDPOINTS.characters);
}

export const  getComics = ()=>{
    return axios.get(ENDPOINTS.comics);
}

export const  getCreators = ()=>{
    return axios.get(ENDPOINTS.creators);
}