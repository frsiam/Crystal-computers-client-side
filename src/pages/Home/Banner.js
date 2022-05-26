import React from 'react';
import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full" alt='' />
            </div>
        </div>
    );
};

export default Banner;