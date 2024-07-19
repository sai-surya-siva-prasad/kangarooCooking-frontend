import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
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
  );
}

export default SearchBar;