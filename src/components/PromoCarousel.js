import React from 'react';

const promos = [
  {
    title: 'Discover Asian Cuisine',
    description: 'Explore authentic recipes from across Asia',
    bgColor: 'bg-blue-100',
    buttonText: 'Explore Now',
  },
  {
    title: 'Share Your Recipes',
    description: 'Join our community and share your favorite dishes',
    bgColor: 'bg-green-100',
    buttonText: 'Add Recipe',
  },
];

function PromoCarousel() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {promos.map((promo, index) => (
        <div
          key={index}
          className={`${promo.bgColor} p-6 rounded-lg min-w-[300px] flex-shrink-0`}
        >
          <h3 className="font-bold text-xl mb-2">{promo.title}</h3>
          <p className="mb-4">{promo.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
            {promo.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PromoCarousel;