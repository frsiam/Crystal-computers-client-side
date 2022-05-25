import React from 'react';

const HeroArea = () => {
    return (
        <div class="hero min-h-md bg-gradient-to-r from-cyan-500 to-blue-500 py-8">
            <div class="max-w-6xl mx-auto hero-content flex-col lg:flex-row-reverse">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold text-red-600">Get Premium Service!</h1>
                    <p class="py-6 text-slate-200 text-xl">If you want to get a premium service then you must have a 5 years business partnership. Premium service provided the free shipping facility. 5% discount for every 500 quantities of specific products.</p>
                    <button class="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;