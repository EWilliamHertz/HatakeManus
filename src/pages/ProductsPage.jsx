import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories, getProductsByCategory } from '../data/products';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOption, setSortOption] = useState('Default');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    // Filter products by category
    let filtered = getProductsByCategory(selectedCategory);
    
    // Sort products
    if (sortOption === 'Price: Low to High') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: High to Low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, sortOption]);
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Our Products
      </h1>
      
      <div className="mb-8">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Explore our curated collection of premium TCG accessories, designed with Nordic craftsmanship to elevate your gaming experience.
        </p>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option>Default</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      
      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
