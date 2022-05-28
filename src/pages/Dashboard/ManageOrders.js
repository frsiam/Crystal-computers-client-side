import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('allOrders', () =>
        fetch(`https://warm-chamber-44220.herokuapp.com/orders/${user.email}`, {
            method: 'get',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
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
                            <th>Product Name</th>
                            <th>Orders Quantity</th>
                            <th>Order Bill</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* <!-- row 1 --> */}
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.price}</td>
                                <td className='flex gap-2 flex-col lg:flex-row justify-center'>
                                    <button className="btn btn-xs btn-primary">UnPaid</button>
                                    {/* <button onClick={() => deleteProduct(product._id)} className="btn btn-error">Delete</button> */}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;