import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="bg-green-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="rounded-lg bg-green-600 px-6 py-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Want product news and updates?
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-green-200">
              Sign up for our newsletter to stay up to date with eco-friendly products and exclusive offers.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <form onSubmit={handleSubmit} className="sm:flex">
              <input
                type="email"
                required
                className="w-full rounded-md border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                <Send className="h-5 w-5 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}