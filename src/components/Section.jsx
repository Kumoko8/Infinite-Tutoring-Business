import React from 'react';



const Section = ({ title, subtitle, text, alterText }) => {
  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'transparent', color: 'black'}}>
      <h1>{title}</h1>
      <div style={{ width: '100%' }}> {text} </div>
      <h2>{subtitle} </h2> 
      <div style={{ width: '100%'}}>
        {alterText}
      </div>
    </div>
  );
};

export default Section;
