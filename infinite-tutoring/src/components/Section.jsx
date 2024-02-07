import React from 'react';

const Section = ({ title, subtitle, text, alterText }) => {
  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center', backgroundColor: 'white' }}>
      <h1>{title}</h1>
      <h2>{subtitle} </h2>
      <h3 style={{ width: '50%' }}> {text} </h3>
      <div style={{ textAlign: 'right'}}>
        <h3 style={{ width: '50%', }}>{alterText}</h3>
      </div>
    </div>
  );
};

export default Section;
