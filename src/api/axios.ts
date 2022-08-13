import axios, { AxiosInstance } from 'axios';
const DEPLOY_URL =''
export const api:AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'? 'http://localhost:3000/api' : DEPLOY_URL
})