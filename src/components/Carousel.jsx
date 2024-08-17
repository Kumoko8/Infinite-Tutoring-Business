import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Carousel.css'; // Import CSS file for styling
import heroImage from '../assets/logo.jpg';
import kumo from '../assets/kumoTform.webp';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [heroImage, kumo]; // Array of image paths

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const springs = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    reset: true,
    config: { duration: 1000 },
  });

  return (
    <div className="carousel-container">
      <animated.div style={{ ...springs }}>
        <img
          src={images[index]}
          alt={`Slide ${index}`}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </animated.div>
    </div>
  );
};

export default Carousel;

