import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

function Preferences() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  const handleAddIngredient = () => {
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter(item => item !== ingredient));
  };

  const handleFindRecipes = () => {
    // This is where you would normally call your backend API
    // For now, we'll just simulate some suggested recipes
    const dummySuggestions = [
      { id: 1, name: "Stir-Fried Vegetables", matchingIngredients: 3 },
      { id: 2, name: "Simple Fried Rice", matchingIngredients: 2 },
      { id: 3, name: "Vegetable Soup", matchingIngredients: 4 },
    ];
    setSuggestedRecipes(dummySuggestions);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">What's in Your Kitchen?</h1>
      
      <div className="mb-8">
        <div className="flex mb-4">
          <input
            type="text"
            value={newIngredient}
            onChange={(e) => setNewIngredient(e.target.value)}
            placeholder="Enter an ingredient"
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddIngredient}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <FaPlus />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="bg-gray-200 px-3 py-1 rounded-full flex items-center">
              {ingredient}
              <button
                onClick={() => handleRemoveIngredient(ingredient)}
                className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleFindRecipes}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Find Recipes
        </button>
      </div>

      {suggestedRecipes.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Suggested Recipes</h2>
          <ul className="space-y-4">
            {suggestedRecipes.map((recipe) => (
              <li key={recipe.id} className="bg-white p-4 rounded-md shadow">
                <h3 className="text-xl font-semibold">{recipe.name}</h3>
                <p className="text-gray-600">Matches {recipe.matchingIngredients} of your ingredients</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Preferences;