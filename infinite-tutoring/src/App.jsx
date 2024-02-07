import { Element } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Section from '../src/components/Section'
import Hero from '../src/components/Hero'
import Carousel from '../src/components/Carousel'
import sections from '../src/components/modules/sections';

import './App.css'

function App() {
const hero = {
  title: "Infinite Tutoring",
  subtitle: "Excellence, Engagement, Exploration",
  text: "set your child up for success",
  image:"../src/assets/logo.jpg "
}
return (
  <div>
    <Parallax bgImage='../src/assets/logo.jpg' strength={500}>
<Hero title={hero.title} subtitle={hero.subtitle} text={hero.text} image={hero.image}/>
<Carousel />
    {sections.map((sections, index) => (
      <Element key={index} name={sections.title}>
          <Section title={sections.title} subtitle={sections.subtitle} text={sections.text} alterText={sections.alterText}/>
      </Element>
    ))}
    </Parallax>
  </div>
);
};

export default App;

//what is strength?
//adjust logo
//fill out sections and link buttons
//minimal nav bar
//sample content