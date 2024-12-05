import React from 'react';
import './Gallery.css'; // Import CSS file for styling
import Draw from "../assets/drawing-preview.jpg";
import Math from '../assets/math-preview.jpg';
import Science from '../assets/sci-preview.jpg';
import Site from '../assets/site-preview.jpg';
import draw from '../assets/draw.png';

const images = [Math, Draw, Science, Site /* add more images here */];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img
            src={image}
            alt={`Gallery item ${index + 1}`}
            className="gallery-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

