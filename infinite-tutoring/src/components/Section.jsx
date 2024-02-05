import React from 'react';

const Section = ({ title }) => {
  return (
    <div style={{ height: '500px', textAlign: 'center', paddingTop: '100px' }}>
      <h2>{title}</h2>
    </div>
  );
};

export default Section;
