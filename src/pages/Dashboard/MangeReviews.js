import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const MangeReviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('allreviews', () =>
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    const handleReview = id => {
        console.log(id)
        const proceed = window.confirm

    }
    return (
        <div className='max-w-6xl mx-auto mt-8'>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    {/* <!-- head --> */}
                    <thead className='text-center'>
                        <tr>
                            <th>N.L</th>
                            <th>Name</th>
                            <th>User Email</th>
                            <th>Description</th>
                            <th>User Ratings</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* <!-- row 1 --> */}
                        {
                            reviews?.map((review, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{review.name}</td>
                                <td>{review.email}</td>
                                <td>{review.message.slice(0, 50)}...</td>
                                <td>{review.ratings}</td>
                                <td>
                                    <i onClick={() => handleReview(review._id)} className="fa-regular fa-trash-can text-2xl text-red-600"></i>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MangeReviews;