'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

// Get unique categories
const categories = ['all', ...new Set(products.map(product => product.category))];

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  // Apply filters, sorting and search
  useEffect(() => {
    let result = [...products];
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    // Sort
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.onSale ? a.salePrice : a.regularPrice) - (b.onSale ? b.salePrice : b.regularPrice));
        break;
      case 'price-high':
        result.sort((a, b) => (b.onSale ? b.salePrice : b.regularPrice) - (a.onSale ? a.salePrice : a.regularPrice));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // No sorting needed for default
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://placehold.co/1920x1080/f9bc60/004643.png?text=Our+Pineapple+Products"
            alt="Our Pineapple Products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/60"></div>
        </div>
        <div className="relative z-10 py-16 px-8 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Pineapple Products</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our selection of premium pineapples and pineapple-based products
          </p>
        </div>
      </div>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
          <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSortBy('default');
              setSearchQuery('');
            }}
            className="mt-4 text-primary hover:text-primary/80"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
} 