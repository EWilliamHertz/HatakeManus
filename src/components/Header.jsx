import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import logo from '../assets/images/logo.png';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Hatake TCG Logo" className="h-16" />
        </Link>
        
        <div className="flex items-center space-x-6">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">
              🏠
            </Link>
            <Link to="/products" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Shop
            </Link>
            <Link to="/events" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Events
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">
              About
            </Link>
            <Link to="/partner" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Partner
            </Link>
          </nav>
          
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu - hidden by default, shown when menu button is clicked */}
      <div className="md:hidden hidden bg-white dark:bg-gray-900 py-2 px-4">
        <nav className="flex flex-col space-y-3">
          <Link to="/" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors py-2">
            Home
          </Link>
          <Link to="/products" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors py-2">
            Shop
          </Link>
          <Link to="/events" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors py-2">
            Events
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors py-2">
            About
          </Link>
          <Link to="/partner" className="text-gray-800 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors py-2">
            Partner
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
