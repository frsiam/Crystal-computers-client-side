import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const ManageProduct = () => {
    const { data: allproducts, isLoading, refetch } = useQuery('products', () =>
        fetch('https://warm-chamber-44220.herokuapp.com/parts')
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    const deleteProduct = (id) => {
        const proceed = window.confirm('Are you sure to delete this Product?');
        if (proceed) {
            console.log(id)
            fetch(`https://warm-chamber-44220.herokuapp.com/deleteparts/${id}`, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }
    }

    return (
        <div className='max-w-6xl mx-auto mt-8'>
            <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                    {/* <!-- head --> */}
                    <thead className='text-center'>
                        <tr>
                            <th>N.L</th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Per Unit Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* <!-- row 1 --> */}
                        {
                            allproducts.map((product, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 mask mask-squircle">
                                            <img src={product.img} alt='avatar' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td className='flex gap-2 flex-col lg:flex-row justify-center'>
                                    <button className="btn btn-primary">Update</button>
                                    <button onClick={() => deleteProduct(product._id)} className="btn btn-error">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;