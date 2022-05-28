import axiosInstance from "axios";

export const axios = axiosInstance.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 5000,
});
