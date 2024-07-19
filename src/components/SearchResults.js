import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipeList from '../components/RecipeList';

function SearchResults() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://3.131.36.58:8000/api/recipes/?search=${query}`);
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoading(false);
      }
    };

    fetchResults();
  }, [location.search]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
}

export default SearchResults;