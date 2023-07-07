import axios from "axios";

const api = axios.create({
  baseURL: "https://api.letswatch.ir",
  // baseURL: 'http://localhost:8000',
});

export default api;
