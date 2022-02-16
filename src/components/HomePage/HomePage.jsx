import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import './home-page.css';
import HomePageMiddleSection from './HomePageMiddleSection/HomePageMiddleSection';
function HomePage() {
    return (
        <>
            <HeroBanner />
            <div className='white-line-seperator'></div>
            <HomePageMiddleSection />
        </>
    );
}

export default HomePage;
