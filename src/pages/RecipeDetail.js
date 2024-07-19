import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://3.131.36.58:8000/api/recipes/${id}/`);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipe');
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div></div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-10">{error}</div>;
  if (!recipe) return <div className="text-center text-xl mt-10">Recipe not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden my-10">
      <div className="relative">
        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover" />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <h1 className="text-4xl font-bold text-white mb-2">{recipe.title}</h1>
          <p className="text-white text-lg">{recipe.country} Cuisine</p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-lg">{recipe.cooking_time} minutes</span>
          </div>
          <div className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            {recipe.country}
          </div>
        </div>
        
        <p className="text-gray-700 text-lg mb-8">{recipe.description}</p>
        
        {recipe.video && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
            <video controls className="w-full rounded-lg shadow-lg">
              <source src={recipe.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc list-inside space-y-2">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;