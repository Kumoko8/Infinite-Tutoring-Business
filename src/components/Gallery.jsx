import React from 'react';
import './Gallery.css'; // Import CSS file for styling
import Draw from "../assets/Drawing_Tile.jpg";
import Math from '../assets/Math_Tile.jpg';
import Science from '../assets/Science_Tile.jpg';


const images = [Math, Draw, Science ];

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

