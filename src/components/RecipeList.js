import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
          <div className="relative h-32 sm:h-36">
            <img 
              src={recipe.image || '/images/default-recipe.jpg'} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
              <h3 className="text-white text-sm font-bold truncate">{recipe.title}</h3>
            </div>
          </div>
          <div className="p-2">
            <p className="text-gray-600 text-xs mb-1 truncate">{recipe.description}</p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">{recipe.cooking_time} mins</span>
              <span className="font-semibold text-blue-600">{recipe.country}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecipeList;