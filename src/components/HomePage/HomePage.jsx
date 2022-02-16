import React, { useEffect, useState } from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import './home-page.css';
import HomePageMiddleSection from '../HomePageMiddleSection/HomePageMiddleSection';
import Footer from '../Footer/Footer';

function HomePage() {
    return (
        <>
            <HeroBanner />
            <div className='white-line-seperator'></div>
            <HomePageMiddleSection />
            <Footer />
        </>
    );
}

export default HomePage;
