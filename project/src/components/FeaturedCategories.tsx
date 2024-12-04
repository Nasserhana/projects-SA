import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Eco Home',
    description: 'Sustainable living essentials',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Fashion',
    description: 'Organic clothing collection',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Beauty',
    description: 'Natural and cruelty-free',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&q=80&w=800',
  },
];

export function FeaturedCategories() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {categories.map((category) => (
            <Link key={category.name} to="/products" className="group">
              <div className="relative w-full h-80 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}