import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { title, date, location, description, link } = event;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        
        <div className="mb-4">
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            <strong>Date:</strong> {date}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Location:</strong> {location}
          </p>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
