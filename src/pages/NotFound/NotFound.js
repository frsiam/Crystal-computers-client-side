import React from 'react';
import notfound from '../../assets/images/notfound.jpg'

const NotFound = () => {
    return (
        <div className='max-w-6xl flex justify-center mx-auto mt-6 min-h-screen'>
            <div>
                <img className='w-100 block' src={notfound} alt="" />
                <h1 className='text-3xl font-bold'>Your page is not Found</h1>
            </div>
        </div>
    );
};

export default NotFound;