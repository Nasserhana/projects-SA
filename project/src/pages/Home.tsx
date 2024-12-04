import React from 'react';
import { Banner } from '../components/Banner';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Newsletter } from '../components/Newsletter';

export function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}