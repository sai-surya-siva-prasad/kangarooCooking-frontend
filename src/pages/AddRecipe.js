import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    cooking_time: '',
    country: '',
    ingredients: [''],
    instructions: [''],
    image: null,
    video: null
  });

  const countries = [
    { name: 'Taiwan', path: '/taiwanese' },
    { name: 'China (Cantonese)', path: '/cantonese' },
    { name: 'China (Szechuan)', path: '/szechuan' },
    { name: 'Japan', path: '/japanese' },
    { name: 'Korea', path: '/korean' },
    { name: 'India', path: '/indian' },
    { name: 'Thailand', path: '/thai' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      [name]: value
    }));
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = value;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: newIngredients
    }));
  };

  const handleInstructionChange = (index, value) => {
    const newInstructions = [...recipe.instructions];
    newInstructions[index] = value;
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      instructions: newInstructions
    }));
  };

  const addIngredient = () => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, '']
    }));
  };

  const addInstruction = () => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      instructions: [...prevRecipe.instructions, '']
    }));
  };

  const handleImageChange = (e) => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      image: e.target.files[0]
    }));
  };

  const handleVideoChange = (e) => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      video: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);  // Disable the button at the start of submission
    const formData = new FormData();
    formData.append('title', recipe.title);
    formData.append('description', recipe.description);
    formData.append('cooking_time', recipe.cooking_time);
    formData.append('country', recipe.country);
    formData.append('ingredients', JSON.stringify(recipe.ingredients));
    formData.append('instructions', JSON.stringify(recipe.instructions));
    
    if (recipe.image) {
      formData.append('image', recipe.image);
    }
    if (recipe.video) {
      formData.append('video', recipe.video);
    }
  
    try {
      const response = await axios.post('http://3.131.36.58:8000/api/recipes/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Recipe added:', response.data);
      
      // Find the corresponding path for the selected country
      const selectedCountry = countries.find(c => c.name === recipe.country);
      if (selectedCountry) {
        navigate(selectedCountry.path); // Redirect to the country-specific page
      } else {
        navigate('/'); // Redirect to home if country is not found (fallback)
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe. Please try again.');
      setIsSubmitting(false);  // Re-enable the button if there's an error
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            value={recipe.description}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Cooking Time (minutes)</label>
          <input
            type="number"
            name="cooking_time"
            value={recipe.cooking_time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Country</label>
          <select
            name="country"
            value={recipe.country}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
          ))}
          <button type="button" onClick={addIngredient} className="text-blue-500">
            + Add Ingredient
          </button>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Instructions</label>
          {recipe.instructions.map((instruction, index) => (
            <textarea
              key={index}
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
            />
          ))}
          <button type="button" onClick={addInstruction} className="text-blue-500">
            + Add Instruction
          </button>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit" 
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Recipe'}
        </button>
      </form>
    </div>
  );
}

export default AddRecipe;