import React, { useState } from 'react';
import { useCartStore } from '../store/useCartStore';
import { Product } from '../types';
import { Filter } from 'lucide-react';

const products: Product[] = [
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
  },
  {
    id: 5,
    name: "Natural Soap Bar Set",
    price: 18.99,
    description: "Handmade organic soap bars",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800",
    category: "Personal Care"
  },
  {
    id: 6,
    name: "Bamboo Cutlery Set",
    price: 21.99,
    description: "Portable reusable cutlery set",
    image: "https://images.unsplash.com/photo-1584346133934-a3afd2a33c4c?auto=format&fit=crop&q=80&w=800",
    category: "Kitchen"
  },
  {
    id: 7,
    name: "Recycled Paper Notebook",
    price: 9.99,
    description: "100% recycled paper journal",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  },
  {
    id: 8,
    name: "Hemp Backpack",
    price: 49.99,
    description: "Durable hemp canvas backpack",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    category: "Accessories"
  }
];

const categories = ["All", "Accessories", "Clothing", "Personal Care", "Kitchen"];

export function Products() {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(
    product => selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-0">Our Products</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-green-500 focus:outline-none focus:ring-green-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
              <button
                onClick={() => addItem(product)}
                className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
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