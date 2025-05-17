import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, image, price, stock, description } = product;
  
  // Convert product name to URL-friendly slug
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link to={`/product/${slug}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={`/images/${image}`} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
          
          <div className="flex justify-between items-center mt-3">
            <span className="text-red-600 dark:text-red-400 font-bold">${price}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {stock > 0 ? `Only ${stock} left` : 'Out of stock'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
