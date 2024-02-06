import React from 'react';

const Section = ({ title, subtitle, text, image}) => {
  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center'}}>
      <h1>{title}</h1>
      <h2>{subtitle} </h2>
      <h3> {text} </h3>
      <img src={image} alt={`Image for ${title}` } />
    </div>
  );
};

export default Section;
