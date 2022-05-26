import React from 'react';
import heroarea from '../../assets/images/heroarea.png'

const HeroArea = () => {
    return (
        <div className="hero min-h-md bg-gradient-to-r from-cyan-500 to-blue-500 py-8">
            <div className="max-w-6xl mx-auto hero-content flex-col lg:flex-row-reverse">
                <img src={heroarea} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-red-600">Get Premium Service!</h1>
                    <p className="py-6 text-slate-200 text-xl">If you want to get a premium service then you must have a 5 years business partnership. Premium service provided the free shipping facility. 5% discount for every 500 quantities of specific products.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;