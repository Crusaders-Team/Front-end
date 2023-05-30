import axios from "axios";

const api = axios.create({
  baseURL: "https://www.letswatch.com",
  // baseURL: 'http://localhost:8000',
});

export default api;
