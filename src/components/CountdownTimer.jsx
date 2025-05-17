import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ releaseDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isReleased, setIsReleased] = useState(false);
  
  useEffect(() => {
    // Parse the release date
    const releaseDateObj = new Date(releaseDate);
    const currentDate = new Date();
    
    // Check if already released
    if (releaseDateObj <= currentDate) {
      setIsReleased(true);
      return;
    }
    
    // Set up the interval
    const interval = setInterval(() => {
      const now = new Date();
      const difference = releaseDateObj - now;
      
      if (difference <= 0) {
        // Release date has been reached
        clearInterval(interval);
        setIsReleased(true);
        return;
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    // Clean up interval
    return () => clearInterval(interval);
  }, [releaseDate]);
  
  if (isReleased) {
    return (
      <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 py-2 px-4 rounded-md inline-block">
        Available Now!
      </div>
    );
  }
  
  return (
    <div className="text-gray-700 dark:text-gray-300">
      <span className="font-mono">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </span>
      <span className="ml-2">until release</span>
    </div>
  );
};

export default CountdownTimer;
