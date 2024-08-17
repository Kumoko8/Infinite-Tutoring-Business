import React from 'react';
import Section from './Section'
import '../index.css'
const block = <p>
  I spent 5 years teaching and developing Pre-Algebra and Science curriculum in North Memphis, 2 years crafting and executing math intervention resources in Georgetown, and currently work as a special education teacher in the Austin area. I enjoys using my artistic ability, love for storytelling, and passion for teaching and learning to create personalized experiences for students.
</p>

const block2 = <p>
  Check out more resources below!
</p>

function AboutMe() {

  return (
    <div>
      <div>

      </div>
      <Section
        title="About Me"
        text={block}
        alterText={block2}
      />






    </div>
  );
};

export default AboutMe;