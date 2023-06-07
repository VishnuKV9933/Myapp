import axios from 'axios';

export const baseUrl="http://localhost:4000/api"


export const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});
