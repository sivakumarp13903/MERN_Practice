import axios from 'axios';

// Use Vite's import.meta.env to access environment variables
const API_URL = import.meta.env.VITE_API_URL;

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data.courses || []; // Ensure it always returns an array
};


export const createCourse = async (courseData) => {
  const response = await axios.post(`${API_URL}/courses`, courseData);
  return response.data;
};
