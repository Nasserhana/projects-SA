import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">EcoShop</h3>
            <p className="text-sm">
              Making sustainable living accessible and affordable for everyone.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} EcoShop. All rights reserved.
            </p>
            <p className="text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for a sustainable future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}