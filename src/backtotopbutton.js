// BackToTopButton.js

import React, { useState, useEffect } from 'react';
import './backtotopbutton.css'; // Import the CSS file for styling
import { FaArrowUp } from 'react-icons/fa'; // Importing the Arrow Up icon from React Icons

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Add a scroll event listener to toggle button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust the scroll position as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  };

  return (
    <div className={`back-to-top-btn ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </div>
  );
};

export default BackToTopButton;