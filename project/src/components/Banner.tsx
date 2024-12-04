import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Spring Sale</span>
                <span className="block text-green-200">Up to 50% Off</span>
              </h1>
              <p className="mt-3 text-base text-green-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover our eco-friendly collection. Limited time offer on selected items.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}