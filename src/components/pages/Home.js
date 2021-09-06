import React from 'react';
import'../../App.css';
import HeroSection from '../Frame/HeroSection';
import Cards from '../Card/Cards';
import Footer from '../Frame/Footer';

function Home(){
    return (
        <>
        <HeroSection />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;