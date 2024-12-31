import axios from 'axios';

// Access environment variable using Vite's method
const apiUrl = import.meta.env.VITE_API_URL;

export const loginUser = async (email, password) => {
  const response = await axios.post(`${apiUrl}/users/login`, { email, password });
  return response.data;
};


export const signupUser = async (name, email, password) => {
  const response = await axios.post(`${apiUrl}/users/signup`, { name, email, password });
  return response.data;
};
