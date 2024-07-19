import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

function CuisinePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cuisine } = useParams();

  const cuisineMap = {
    taiwanese: { name: 'Taiwan', image: '/images/taiwanese_c.png' },
    cantonese: { name: 'China (Cantonese)', image: '/images/Cantonese.png' },
    szechuan: { name: 'China (Szechuan)', image: '/images/szechuan.png' },
    japanese: { name: 'Japan', image: '/images/japanese.png' },
    korean: { name: 'Korea', image: '/images/Korean.png' },
    indian: { name: 'India', image: '/images/indian.png' },
    thai: { name: 'Thailand', image: '/images/thai.png' }
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://3.131.36.58:8000/api/recipes/', {
          params: { country: cuisineMap[cuisine].name }
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
  }, [cuisine]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    </div>
  );

  const cuisineInfo = cuisineMap[cuisine] || { name: cuisine, image: '/images/default-bg.jpg' };

  return (
    <div className="min-h-screen bg-gray-100">
    <div 
      className="bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${cuisineInfo.image})` }}
    >
      <h1 className="text-4xl font-bold text-white shadow-text">{cuisineInfo.name} Recipes</h1>
    </div>
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <p className="text-xl text-gray-600">Explore the flavors of {cuisineInfo.name}</p>
        <Link 
          to="/add-recipe" 
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add Recipe
        </Link>
      </div>
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-600">No {cuisineInfo.name} recipes found.</p>
          <p className="mt-4 text-lg text-gray-500">Be the first to add one!</p>
        </div>
      )}
    </div>
  </div>
  );
}

export default CuisinePage;