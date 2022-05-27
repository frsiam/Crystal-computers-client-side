import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading />
    }
    const handleReview = (event) => {
        event.preventDefault();
        const reviewText = event.target.message.value;
        const rating = event.target.ratings.value;
        console.log(reviewText, rating);
        const review = {
            name: user.displayName,
            email: user.email,
            message: reviewText,
            ratings: rating
        };
        fetch('http://localhost:4000/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully added Your review !!')
            })
    }
    return (
        <form onSubmit={handleReview} className='w-full'>
            <h1 className='text-2xl text-accent font-bold text-center'>Add a review</h1>
            <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Review Text Here</span>
                </label>
                <textarea name='message' type="text" placeholder="Through Your  review meassage here" className="input input-bordered input-accent w-full max-w-xs block" rows="2" required />
            </div>
            <div className="form-control mx-auto w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Your Ratings Here</span>
                </label>
                <input name='ratings' type="number" placeholder="Your ratings out of 5?" className="input input-bordered input-accent w-full max-w-xs block" required />
            </div>
            <div className="form-control mx-auto w-full max-w-xs mt-4">
                <input className='btn w-full max-w-xm' type="submit" value='Submit' />
            </div>
        </form>
    );
};

export default AddReview;