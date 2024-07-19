import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from '../components/RecipeList';
import CuisineFilter from '../components/CuisineFilter';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://3.131.36.58:8000/api/recipes/');
        setRecipes(response.data);
        setFilteredRecipes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (selectedCuisine) {
      setFilteredRecipes(recipes.filter(recipe => recipe.country === selectedCuisine));
    } else {
      setFilteredRecipes(recipes);
    }
  }, [selectedCuisine, recipes]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Recipes</h1>
      <CuisineFilter selectedCuisine={selectedCuisine} onCuisineChange={setSelectedCuisine} />
      <RecipeList recipes={filteredRecipes} />
    </div>
  );
}

export default Recipes;