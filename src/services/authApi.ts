import axios from "axios";

export const authApi = axios.create({
  baseURL:
    "https://sentinelloginapi-production.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});