import axios from 'axios';
const DEPLOY_URL =''
export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3000/api' : DEPLOY_URL
})