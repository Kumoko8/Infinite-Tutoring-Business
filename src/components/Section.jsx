import React from 'react';



const Section = ({ title, subtitle, text, alterText }) => {
  return (
    <div style={{ marginTop: 100, width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'transparent', color: 'black'}}>
      <h2 style={{color: 'white'}}>{title}</h2>
      <div style={{ width: '100%' }}> {text} </div>
      <h2 style={{color: 'white'}}>{subtitle} </h2> 
      <div style={{ width: '100%'}}>
        {alterText}
      </div>
    </div>
  );
};

export default Section;
