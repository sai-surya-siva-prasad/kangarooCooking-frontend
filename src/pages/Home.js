import React from 'react';
import { Link } from 'react-router-dom';

const cuisines = [
    { name: 'Taiwanese', image: '/images/taiwanese.png', path: '/taiwanese' },
    { name: 'Cantonese', image: '/images/Cantonese.png', path: '/cantonese' },
    { name: 'Szechuan', image: '/images/szechuan.png', path: '/szechuan' },
    { name: 'Japanese', image: '/images/japanese.png', path: '/japanese' },
    { name: 'Korean', image: '/images/korean.png', path: '/korean' },
    { name: 'Indian', image: '/images/indian.png', path: '/indian' },
    { name: 'Thai', image: '/images/thai.png', path: '/thai' },
  ];

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Explore Asian Cuisines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.name}
            to={cuisine.path}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cuisine.image} 
                  alt={`${cuisine.name} cuisine`} 
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 bg-white">
                <h2 className="text-xl font-semibold text-center">{cuisine.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;