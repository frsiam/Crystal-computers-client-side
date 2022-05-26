import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import HeroArea from './HeroArea';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner />
            <HeroArea />
            <Parts />
            <BusinessSummary />
        </div>
    );
};

export default Home;