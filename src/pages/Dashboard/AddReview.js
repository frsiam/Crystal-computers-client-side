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
        fetch('https://warm-chamber-44220.herokuapp.com/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                event.target.reset();
                toast.success('Successfully added Your review !!')
            })
    }
    return (
        <form onSubmit={handleReview} className='w-full mt-8'>
            <h1 className='text-2xl text-accent font-bold text-center'>Add a review</h1>
            <div className="form-control mx-auto w-full max-w-xs my-4">
                <textarea name='message' type="text" placeholder="Through Your  review meassage here" className="input input-info input-bordered w-full max-w-xs block" rows="3" required />
            </div>
            <div className="form-control mx-auto w-full max-w-xs my-4">
                <input name='ratings' type="number" step="0.01" placeholder="Your ratings out of 5?" className="input input-bordered input-info w-full max-w-xs block" required />
            </div>
            <div className="form-control mx-auto w-full max-w-xs mt-4">
                <input className='btn btn-primary w-full max-w-xm' type="submit" value='Submit' />
            </div>
        </form>
    );
};

export default AddReview;