import axios from "axios";
// const axios = require("axios");

export const AxiosInstance = axios.create({
  baseURL: "https://babysisters.onrender.com",
  // baseURL: "http://localhost:8000",
});
