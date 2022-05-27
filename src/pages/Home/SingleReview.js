import React from 'react';

const SingleReview = ({ review }) => {
    return (
        <div className='max-w-xs md:max-w-sm border shadow-md p-5 bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100 hover:to-yellow-200'>
            <p className='text-lg font-semibold'>{review.message}</p>
            <div className='flex justify-between mt-4 bg-base-200 p-2 rounded-lg'>
                <h1 className='font-bold'>Ratings: {review.ratings}</h1>
                <h1 className='font-bold'><span className='text-slate-400'>by: </span><span className='text-md text-pink-600'>{review.name}</span></h1>
            </div>
        </div>
    );
};

export default SingleReview;