import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://babysisters.onrender.com",
  headers: {
    Authorization: "Bearer token",
  },
});
