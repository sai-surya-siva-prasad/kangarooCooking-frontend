import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

function Cart() {
  // Dummy data for featured ingredients
  const featuredIngredients = [
    { id: 1, name: 'Premium Soy Sauce', price: 5.99, image: '/images/soy-sauce.png', rating: 4.5 },
    { id: 2, name: 'Organic Rice Noodles', price: 3.49, image: '/images/rice-noodles.png', rating: 4.2 },
    { id: 3, name: 'Fresh Ginger Root', price: 2.99, image: '/images/ginger.png', rating: 4.7 },
    { id: 4, name: 'Thai Basil Leaves', price: 1.99, image: '/images/thai-basil.png', rating: 4.3 },
    { id: 5, name: 'Jasmine Rice', price: 6.99, image: '/images/jasmine-rice.png', rating: 4.8 },
    { id: 6, name: 'Red Curry Paste', price: 4.49, image: '/images/curry-paste.png', rating: 4.6 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Kangaroocook Ingredient Shop</h1>
      
      <div className="bg-orange-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to our Ingredient Shop!</h2>
        <p className="text-lg">Find all the authentic Asian ingredients you need for your favorite recipes. Fresh, high-quality products delivered to your door.</p>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Featured Ingredients</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredIngredients.map((ingredient) => (
          <div key={ingredient.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={ingredient.image} alt={ingredient.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{ingredient.name}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">${ingredient.price.toFixed(2)}</span>
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{ingredient.rating.toFixed(1)}</span>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition duration-300">
          Browse All Ingredients
        </button>
      </div>
    </div>
  );
}

export default Cart;