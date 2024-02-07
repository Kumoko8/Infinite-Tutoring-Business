import React from 'react';
import heroImage from "../assets/logo.jpg";


const Hero = ({ title, subtitle, text}) => {
  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'left', backgroundColor: 'white', columnCount:2}}>
      <h1>{title}</h1>
      <h2>{subtitle} </h2>
      <h3> {text} </h3>
      <div><img src={heroImage} style={{width: '50%'}}/></div>
    </div>
  );
};

export default Hero;
