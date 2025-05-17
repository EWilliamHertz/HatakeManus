import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full">
      {/* Main image display */}
      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={`/images/${mainImage}`} 
          alt="Product" 
          className="w-full h-auto object-contain"
          style={{ maxHeight: '400px' }}
        />
      </div>
      
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setMainImage(image)}
              className={`rounded-md overflow-hidden border-2 ${
                mainImage === image 
                  ? 'border-red-500 dark:border-red-400' 
                  : 'border-transparent'
              }`}
            >
              <img 
                src={`/images/${image}`} 
                alt={`Thumbnail ${index + 1}`} 
                className="w-full h-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
