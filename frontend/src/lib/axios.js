import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://fullstack-chat-app-1-a2ww.onrender.com/api",
  withCredentials: true,
});