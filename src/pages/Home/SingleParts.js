import React from 'react';
import { Link } from 'react-router-dom';

const SingleParts = ({ part, desc }) => {
    const { name, img, price, minOrderQuantity, availableQuantity, _id } = part;
    return (
        <div className='shadow-md p-2'>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
                <div className='md:col-span-4'>
                    <img className='img-fluid h-100 rounded-full mask mask-parallelogram-2' src={img} alt="" />
                </div>
                <div className='text-justify md:col-span-6'>
                    <h1 className='text-xl font-bold mb-2'>{name}</h1>
                    <h1 className='fw-bold my-2'>Price: <span className='text-orange-500'>{price}</span></h1>
                    <h1 className='fw-bold my-2'>Minimum Order Quantity: <span className='text-pink-500'>{minOrderQuantity}</span></h1>
                    <h1 className='font-bold mt-2'>Available Quantity: <span className='text-blue-600'>{availableQuantity}</span></h1>
                    <p className='mb-2'>{desc}...</p>
                    <Link to={`purchase/${_id}`}>
                        <button className="btn btn-info rounded-0 w-100">Stock Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleParts;