import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables();

const todoAppApi = axios.create({
  baseURL: VITE_API_URL,
});

// Todo: configurar interceptores
todoAppApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

export default todoAppApi;
