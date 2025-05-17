import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { events } from '../data/events';

const HomePage = () => {
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);
  
  // Get the next upcoming event
  const nextEvent = events[0];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Hatake
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            a Nordic TCG Brand
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View Products
          </Link>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Introduction
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At Hatake TCG, we're more than just a brand – we're a community of passionate trading card game (TCG) enthusiasts dedicated to enhancing every aspect of your gaming experience. Founded in 2025 in the heart of Falköping, Sweden, Hatake is the perfect fusion of Nordic elegance, premium craftsmanship, and a deep love for the TCG culture.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is clear: to craft high-quality, innovative gear that rivals the best in the industry, while staying true to our roots. With a commitment to ethical manufacturing and a vision for sustainable Nordic production, we're not just creating products – we're building a legacy.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Explore our curated collection of premium TCG accessories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <Link to={`/product/${product.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={`/images/${product.image}`} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {product.description}
                    </p>
                    <p className="text-red-600 dark:text-red-400 font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/products" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Upcoming Events
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {nextEvent.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Date:</strong> {nextEvent.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Location:</strong> {nextEvent.location}
                </p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {nextEvent.description}
              </p>
              
              <div className="flex justify-between items-center">
                <a 
                  href={nextEvent.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Learn More
                </a>
                
                <Link 
                  to="/events" 
                  className="text-red-600 dark:text-red-400 hover:underline"
                >
                  See All Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
