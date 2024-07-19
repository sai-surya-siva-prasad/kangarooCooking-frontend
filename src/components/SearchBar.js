import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      if (search.length > 2) {
        try {
          const response = await axios.get(`http://3.131.36.58:8000/api/recipes/search/?q=${encodeURIComponent(search)}`);
          setResults(response.data);
          setShowDropdown(true);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }
      } else {
        setResults([]);
        setShowDropdown(false);
      }
    };

    const timeoutId = setTimeout(fetchResults, 300);
    return () => clearTimeout(timeoutId);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (id) => {
    navigate(`/recipe/${id}`);
    setSearch('');
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-3 pl-12 pr-6 rounded-full border-2 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-orange-800 placeholder-orange-300 text-lg"
          />
          <button
            type="submit"
            className="absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <FaSearch className="text-orange-400 hover:text-orange-500 text-2xl" />
          </button>
        </div>
      </form>
      {showDropdown && results.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((result) => (
            <div
              key={result.id}
              className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-orange-800"
              onClick={() => handleResultClick(result.id)}
            >
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;