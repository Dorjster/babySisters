import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://teamproject-babysits.onrender.com",
  headers: {
    Authorization: "Bearer token",
  },
});
