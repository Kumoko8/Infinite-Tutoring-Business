import Section from '../components/Section'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Blueprint from '../components/Blueprint'
import AboutMe from '../components/AboutMe'
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';




function Home() {

    return (
        <div>

            <Hero />
            <Carousel />
            <Blueprint />
            <AboutMe />
            <Testimonials />
            <Pricing />


        </div>


    );
};

export default Home;