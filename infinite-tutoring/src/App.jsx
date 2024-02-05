import { Element } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Section from '../src/components/Section'

import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Infinite Tutoring</h1>

        <Element name="home">
          <Parallax bgImage='../src/assets/logo.jpg' strength={500}>
            <Section title="Infinite Tutoring" />
          </Parallax>
        </Element>
        <Element name="about">
          <Section title="About Us" />
        </Element>

      </div>
    </>
  )
}

export default App
