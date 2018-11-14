import md5 from 'md5';

const limit = 30;
const offset = 10;
const timestamp = Date.now();
const privateKey = '17c19567624c97e5a7dcd411d67d5f73cd684a43';
const publicKey = 'fce4a0899bc5b1e414694d5d6923c7e0';
const hash = md5(timestamp + privateKey + publicKey);
const params = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`;

export const URL = 'https://gateway.marvel.com/v1/public/';
export const CHARACTERS_URL = `characters?${params}`;
export const COMICS_URL = `comics?${params}`
export const CREATORS_URL = `creators?${params}`
