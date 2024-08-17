import Section from '../components/Section'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import AboutMe from '../components/AboutMe'
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';




function Home() {

    return (
        <div>

            <Hero />
            <Carousel />
            <Features />
            <AboutMe />
            <Testimonials />
            <Pricing />


        </div>


    );
};

export default Home;