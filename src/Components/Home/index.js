import React from 'react'
// import Header from '../Header'
import Home from './home'
import Hero from './hero';
import HeroServics from './heroServics';
import HeroWorking from './heroWorking';
import Tabs from './Tabs';
import Slider from './Slider';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Elementor from './Elementor';
import Footer from "../Footer"
import Blog from './Blog';
import Testimonials from './Testimons';
import Contact from './Contact';
export default function index() {
    return (
        <>
            {/* <Header /> */}
            <Home />
            <Hero />
            <HeroServics />
            <HeroWorking />
            <Tabs />
            <Slider />
            <Hero2 />
            <Hero3 />
            <Elementor />
            <Blog />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}
