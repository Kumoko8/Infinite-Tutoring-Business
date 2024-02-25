import { Element } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Section from '../src/components/Section'
import Hero from '../src/components/Hero'
import NavBar from '../src/components/NavBar'
import Carousel from '../src/components/Carousel'
import sections from '../src/components/modules/sections';

import './App.css'
import Features from './components/Features'

function App() {

  return (
    <div>
      <NavBar />
      <Parallax bgImage='../src/assets/back5.webp' strength={700} bgImageStyle={{ objectFit: 'cover' }}>

        <Hero />
        <Carousel />

        <Features />
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