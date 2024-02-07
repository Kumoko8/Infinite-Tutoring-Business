import React from 'react';
import './Carousel.css'; // Import CSS file for styling
import heroImage from "../assets/logo.jpg";



const Carousel = () => {
 
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Insert your images or icons here */}
        <img src={heroImage} alt="Image 1" />
        <img src={heroImage} alt="Image 2" />
        <img src={heroImage} alt="Image 3" />
        {/* Add more images or icons as needed */}
      </div>
    </div>
  );
};

export default Carousel;
