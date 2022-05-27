import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () =>
        fetch('https://warm-chamber-44220.herokuapp.com/reviews')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <h1 className='text-5xl text-red-600 font-bold my-10 text-center'>Reviews</h1>
            <div className="flex justify-center">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;