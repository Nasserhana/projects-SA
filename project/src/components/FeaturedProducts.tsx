import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types';

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 29.99,
    description: "Double-walled insulated stainless steel bottle",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    description: "100% organic cotton, ethically made",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800",
    category: "Clothing"
  },
  {
    id: 3,
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    description: "Pack of 4 biodegradable toothbrushes",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&q=80&w=800",
    category: "Personal Care"
  },
  {
    id: 4,
    name: "Reusable Produce Bags",
    price: 15.99,
    description: "Set of 5 mesh produce bags",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800",
    category: "Kitchen"
  }
];

export function FeaturedProducts() {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <button
                onClick={() => addItem(product)}
                className="mt-4 w-full bg-green-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}