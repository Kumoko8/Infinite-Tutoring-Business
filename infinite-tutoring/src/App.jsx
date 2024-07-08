import { Element } from 'react-scroll'
import { Routes, Route } from 'react-router-dom';
import { Parallax } from 'react-parallax'
import Section from '../src/components/Section'
import NavBar from '../src/components/NavBar'
import sections from '../src/components/modules/sections';
import Terms from './views/Terms'
import Home from './views/Home'

import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <Parallax bgImage='../src/assets/back5.webp' strength={700} bgImageStyle={{ objectFit: 'cover' }}>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
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