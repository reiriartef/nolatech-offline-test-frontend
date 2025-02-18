import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Reemplaza con la URL de tu backend
});

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (loginData) => {
  const response = await api.post("/auth/login", loginData);
  return response.data;
};
