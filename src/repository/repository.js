import axios from 'axios';

const apiVersion = 'v2';

const baseURL = `https://restcountries.eu/rest/${apiVersion}`;

export default axios.create({
    baseURL
})