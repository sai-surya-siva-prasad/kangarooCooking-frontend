import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kangaroocook</h3>
            <p className="text-gray-400 mb-4">Discover your Asian stomach with Kangacook! Explore recipes from all over Asia and share your cooking ideas.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/add-recipe" className="text-gray-400 hover:text-white transition-colors duration-300">Add Recipe</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Cuisines</h4>
            <ul className="space-y-2">
              <li><Link to="/taiwanese" className="text-gray-400 hover:text-white transition-colors duration-300">Taiwanese</Link></li>
              <li><Link to="/japanese" className="text-gray-400 hover:text-white transition-colors duration-300">Japanese</Link></li>
              <li><Link to="/korean" className="text-gray-400 hover:text-white transition-colors duration-300">Korean</Link></li>
              <li><Link to="/indian" className="text-gray-400 hover:text-white transition-colors duration-300">Indian</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest recipes and cooking tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
              >
                <MdEmail size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kangacook. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 flex justify-center items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> in the kitchen
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;