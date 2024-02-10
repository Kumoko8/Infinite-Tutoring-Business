import React from 'react';
import { useState, useEffect } from 'react';
import './Carousel.css'; // Import CSS file for styling
import heroImage from "../assets/logo.jpg";
import { useSpring, animated } from '@react-spring/web'

const Carousel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const springs = useSpring({
    from: { x: 0 },
    to: { x: screenWidth },
    loop: true , // Enable looping with reverse behavior
    config: { duration: 15000 },
    onRest: () => {
      // Reset the animation when it reaches the end
      springs.start({ x: 0 });
    }
  })
  return (
    

    <div className="carousel-container">
      <animated.div style={{
        width: '10rem',
        height: '10rem',
        borderRadius: 8,
        ...springs
      }}>
        <img
          src={heroImage} // Replace with the path to your image
          alt="Image"
          style={{
            width: 'auto', // Adjust width as needed
            height: '100%', // Adjust height as needed
            borderRadius: '8px', // Adjust border radius as needed
          }}
        />
        </animated.div >
     
    </div>
  );
};

export default Carousel;
