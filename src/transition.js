// transition_background.js
import React, { useState, useEffect } from 'react';
import './transition_style.css'
const TransitionBackground = ({ newImage }) => {
  const [backgroundImage, setBackgroundImage] = useState(newImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (newImage) {
      setIsTransitioning(true); // Start transition
      const timer = setTimeout(() => {
        setBackgroundImage(newImage); // Change to new image
        setIsTransitioning(false); // End transition
      }, 1000); // Transition duration (1 second)

      return () => clearTimeout(timer); // Cleanup
    }
  }, [newImage]);

  return (
    <div
      className={`background-container ${isTransitioning ? 'fade' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default TransitionBackground;
