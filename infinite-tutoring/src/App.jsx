import { Element } from 'react-scroll'
import { Parallax } from 'react-parallax'
import Section from '../src/components/Section'

import './App.css'

function App() {
const sections = [
  {
    title: "Infinite Tutoring",
   
},
{
  title: "Infinite Tutoring",
  subtitle: "Expert Tutors to Help You Succeed",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  image: "/images/welcome-image.jpg",
},
]
  return (
    <>

      <Parallax bgImage='../src/assets/logo.jpg' strength={1000}>
        <Element name="home" class='card'>
          <Section title={sections.title} />

        </Element>
        <Element name="about">
          <Section subtitle="Who We Are" />
<p> We help kids reach their greatest potential by first instilling confidence. We believe in the limitless potential of every student we serve.</p>

        </Element>
        <Element name="what">
          <Section subtitle='What We Do'/>
            <p> We offer a personal learning experience focused on using visuals, storytelling, and making connections. </p>
          
        </Element>
      </Parallax>
    </>
  )
}

export default App

//what is strength?
//adjust logo
//fill out sections and link buttons
//minimal nav bar
//sample content