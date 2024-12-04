import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useCartStore } from '../store/useCartStore';

export function Navbar() {
  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items);
  const cartItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              EcoShop
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <Link to={user ? "/profile" : "/login"} className="text-gray-600 hover:text-gray-900">
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}