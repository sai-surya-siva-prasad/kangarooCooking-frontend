import axios from 'axios';

const API_URL = 'http://3.131.36.58:8000/api';

export const getRecipes = async () => {
  const response = await axios.get(`${API_URL}/recipes/`);
  return response.data;
};

export const createRecipe = async (recipeData) => {
  const response = await axios.post(`${API_URL}/recipes/`, recipeData);
  return response.data;
};

export const updateRecipe = async (id, recipeData) => {
  const response = await axios.put(`${API_URL}/recipes/${id}/`, recipeData);
  return response.data;
};

export const deleteRecipe = async (id) => {
  await axios.delete(`${API_URL}/recipes/${id}/`);
};