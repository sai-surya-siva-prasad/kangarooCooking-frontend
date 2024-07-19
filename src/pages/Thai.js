import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

function Thai() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://3.131.36.58:8000/api/recipes/', {
          params: { country: 'Thailand' }
        });
        setRecipes(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to fetch recipes. Please try again later.');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Thai Recipes</h1>
        <Link to="/add-recipe" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          Add Recipe
        </Link>
      </div>
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p>No Thai recipes found. Be the first to add one!</p>
      )}
    </div>
  );
}

export default Thai;