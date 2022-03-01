import axios from "axios";
import { getToken } from "../_helpers/token";
import apiConfig from "../../tsconfig.json";
const api = axios.create({
  //baseURL: `http://192.168.1.240:8063/api/`,
  //baseURL: `https://localhost:7278/api/`,  // -->> Główne
  baseURL: `https://localhost:7079/api/`,   // -->> Pośrednie
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "application/json",
  },
});



const reloadConfig = () => {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  });
};

export { api, reloadConfig };
