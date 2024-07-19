import React from 'react';

const cuisines = [
  { name: 'Trending', icon: '🔥' },
  { name: 'Fast Food', icon: '🍟' },
  { name: 'Indian', icon: '🍛' },
  { name: 'Burgers', icon: '🍔' },
  { name: 'Chicken', icon: '🍗' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Desserts', icon: '🍰' },
  { name: 'Sushi', icon: '🍣' },
  { name: 'Chinese', icon: '🥡' },
  { name: 'Healthy', icon: '🥗' },
];

function CuisineFilter() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {cuisines.map((cuisine, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center min-w-[64px] text-center"
        >
          <span className="text-2xl mb-1">{cuisine.icon}</span>
          <span className="text-sm">{cuisine.name}</span>
        </button>
      ))}
    </div>
  );
}

export default CuisineFilter;