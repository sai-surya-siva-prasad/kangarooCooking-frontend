import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    cooking_time: '',
    country: '',
    ingredients: [{ name: '', amount: '', unit: '' }],
    instructions: [{ step: 1, description: '' }]
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (index, field, value) => {
    const newIngredients = recipe.ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = recipe.instructions.map((instruction, i) => {
      if (i === index) {
        return { ...instruction, description: value };
      }
      return instruction;
    });
    setRecipe({ ...recipe, instructions: newInstructions });
  };

  const addIngredient = () => {
    setRecipe({
      ...recipe,
      ingredients: [...recipe.ingredients, { name: '', amount: '', unit: '' }]
    });
  };

  const addInstruction = () => {
    setRecipe({
      ...recipe,
      instructions: [
        ...recipe.instructions,
        { step: recipe.instructions.length + 1, description: '' }
      ]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('Surya');
        const response = await axios.post('http://3.131.36.58:8000/api/recipes/', recipe);
        console.log('Siva');
       if (response.status === 201) {
        alert('Recipe added successfully!');
        // Reset form
        setRecipe({
          title: '',
          description: '',
          cooking_time: '',
          country: '',
          ingredients: [{ name: '', amount: '', unit: '' }],
          instructions: [{ step: 1, description: '' }]
        });
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
      if (error.response) {
        alert(`Failed to add recipe: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        alert('Failed to add recipe: No response from server');
      } else {
        alert('Failed to add recipe: ' + error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" value={recipe.title} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" value={recipe.description} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Cooking Time (minutes)</label>
        <input type="number" name="cooking_time" value={recipe.cooking_time} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input type="text" name="country" value={recipe.country} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index} className="flex space-x-2 mt-1">
            <input type="text" value={ingredient.name} onChange={(e) => handleIngredientChange(index, 'name', e.target.value)} placeholder="Ingredient" className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <input type="text" value={ingredient.amount} onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)} placeholder="Amount" className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
            <input type="text" value={ingredient.unit} onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)} placeholder="Unit" className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        ))}
        <button type="button" onClick={addIngredient} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Ingredient</button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Instructions</label>
        {recipe.instructions.map((instruction, index) => (
          <div key={index} className="flex space-x-2 mt-1">
            <span className="flex-shrink-0 pt-2">{instruction.step}.</span>
            <textarea value={instruction.description} onChange={(e) => handleInstructionChange(index, e.target.value)} className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
        ))}
        <button type="button" onClick={addInstruction} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Instruction</button>
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Submit Recipe</button>
    </form>
  );
}

export default RecipeForm;