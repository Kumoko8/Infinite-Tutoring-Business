import React from 'react';
import Section from './Section'
import './AboutMe.css'
import { Typography } from '@mui/material';
const block = <p>
  I spent 5 years teaching and developing Pre-Algebra and Science curriculum in North Memphis, 2 years crafting and executing math intervention resources in Georgetown, and currently work as a special education teacher in the Austin area. I enjoy using my artistic ability, love for storytelling, and passion for learning in order to create personalized experiences for students.
</p>



function AboutMe() {

  return (
    <div>
      <div class='about-block'>
        <Section
          title="About Me"
          text={block}
        />
      </div>
      <Typography>
        Click to see what I've created

      </Typography>







    </div>
  );
};

export default AboutMe;