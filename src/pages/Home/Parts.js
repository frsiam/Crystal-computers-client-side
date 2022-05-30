import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import SingleParts from './SingleParts';

const Parts = () => {
    const { data: parts, isLoading } = useQuery('parts', () =>
        fetch('http://localhost:4000/parts', {
            method: 'get',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='container flex justify-center text-4xl text-orange-700 font-bold my-6'>
                <h1>Our Parts</h1>
            </div>
            <div className='container grid grid-cols-1 gap-4 mx-auto text-center  py-5'>
                {
                    parts.slice(-3).map(p => <SingleParts key={p._id} part={p} desc={p.description.slice(0, 100)} />)
                }
            </div>
        </div>
    );
};

export default Parts;