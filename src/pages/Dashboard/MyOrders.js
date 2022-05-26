import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myorder, setMyOrder] = useState([])

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/myorder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrder(data))
        }
    }, [user])
    return (
        <>
            <h1 className='text-center'>My orders: {myorder.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead className='text-center'>
                        <tr>
                            <th>N.L</th>
                            <th>Name</th>
                            <th>Product Quantity</th>
                            <th>Total Bill</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* <!-- row 1 --> */}
                        {
                            myorder.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.price}</td>
                                <td className='flex gap-2 flex-col lg:flex-row'>
                                    <button className="btn btn-primary">Payment</button>
                                    <button className="btn btn-error">Cancel Order</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyOrders;