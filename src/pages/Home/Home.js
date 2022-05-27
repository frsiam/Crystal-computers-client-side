import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroArea from './HeroArea';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <HeroArea />
            <Parts />
            <Reviews />
            <BusinessSummary />
        </div>
    );
};

export default Home;