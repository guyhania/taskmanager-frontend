import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7002/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default axiosInstance;
