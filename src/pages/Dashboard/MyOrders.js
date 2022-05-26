import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [myorder, setMyOrder] = useState([])
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:4000/myorder?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrder(data))
        }
    }, [user, isReload])

    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure to Cancel this Order?');
        if (proceed) {
            console.log(id)
            fetch(`http://localhost:4000/order/${id}`, {
                method: 'delete',
                headers: {
                    'content-type': 'application/json'
                },
                // body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsReload(!isReload)
                })
        }
    }
    return (
        <div className='max-w-6xl mx-auto'>
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
                            myorder.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.productQuantity}</td>
                                <td>{order.price}</td>
                                <td className='flex gap-2 flex-col lg:flex-row justify-center'>
                                    <button className="btn btn-primary">Payment</button>
                                    <button onClick={() => handleCancelOrder(order._id)} className="btn btn-error">Cancel Order</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;