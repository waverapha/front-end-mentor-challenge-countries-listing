import axios from 'axios';

const apiVersion = 'v3.1';

const baseURL = `https://restcountries.com/${apiVersion}`;

export default axios.create({
  baseURL
})