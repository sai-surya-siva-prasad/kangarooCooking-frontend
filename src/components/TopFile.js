import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUsers, FaShoppingCart, FaUserCog } from 'react-icons/fa';
import SearchBar from './SearchBar';

function TopFile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-extrabold tracking-tight flex-shrink-0">
            Kanga<span className="text-yellow-300">roo</span>cook
          </Link>
          <div className="hidden md:block flex-grow mx-4">
            <SearchBar />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/community" className="text-white hover:text-yellow-300 transition duration-300">
              <FaUsers className="text-2xl" title="Community" />
            </Link>
            <Link to="/cart" className="text-white hover:text-yellow-300 transition duration-300">
              <FaShoppingCart className="text-2xl" title="Cart" />
            </Link>
            <Link to="/preferences" className="text-white hover:text-yellow-300 transition duration-300">
              <FaUserCog className="text-2xl" title="Preferences" />
            </Link>
            <Link to="/add-recipe" className="bg-yellow-300 text-orange-500 px-4 py-2 rounded-full hover:bg-yellow-400 transition duration-300 font-semibold">
              Add Recipe
            </Link>
          </nav>
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-orange-600 px-4 py-2">
          <SearchBar />
          <nav className="mt-2 space-y-2">
            <Link to="/community" className="block py-1 hover:text-yellow-300 transition duration-300">
              <FaUsers className="inline mr-2" /> Community
            </Link>
            <Link to="/cart" className="block py-1 hover:text-yellow-300 transition duration-300">
              <FaShoppingCart className="inline mr-2" /> Cart
            </Link>
            <Link to="/preferences" className="block py-1 hover:text-yellow-300 transition duration-300">
              <FaUserCog className="inline mr-2" /> Preferences
            </Link>
            <Link to="/add-recipe" className="block py-1 hover:text-yellow-300 transition duration-300">
              Add Recipe
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default TopFile;