import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import CountdownTimer from '../components/CountdownTimer';
import ImageGallery from '../components/ImageGallery';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get product data based on slug
    const productData = getProductBySlug(slug);
    
    if (productData) {
      setProduct(productData);
    }
    
    setLoading(false);
  }, [slug]);
  
  const handleAddToCart = () => {
    alert('Added to Cart!');
  };
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          to="/products" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  
  // Prepare all images for gallery
  const allImages = [product.image, ...product.additionalImages];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link 
          to="/products" 
          className="text-red-600 dark:text-red-400 hover:underline flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <ImageGallery images={allImages} />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h1>
          
          <p className="text-xl text-red-600 dark:text-red-400 font-bold mb-4">
            ${product.price.toFixed(2)}
          </p>
          
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-medium">Stock:</span> {product.stock > 0 ? `Only ${product.stock} units left for preorder` : 'Out of stock'}
            </p>
            
            <div className="flex items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">
                Release Date: {new Date(product.releaseDate).toLocaleDateString()}
              </span>
              <CountdownTimer releaseDate={product.releaseDate} />
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {product.description}
            </p>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
