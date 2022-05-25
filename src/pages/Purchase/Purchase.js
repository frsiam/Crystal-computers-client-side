import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    const [isLoading, setIsLoading] = useState(true)

    const [purchase, setPurchase] = useState(false);
    const [orderQuantity, setOrderQuantity] = useState(0)

    const [part, setPart] = useState({});
    useEffect(() => {
        fetch(`http://localhost:4000/purchase/${id}`)
            .then(res => res.json())
            .then(data => {
                setPart(data)
                setOrderQuantity(data.minOrderQuantity)
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Loading />
    }
    const { minOrderQuantity, availableQuantity, img, price, description, name } = part;

    const handleQunatity = event => {
        const order = event.target.value;
        const numOrder = parseFloat(order)
        setOrderQuantity(numOrder)

        if ((numOrder) < minOrderQuantity || (numOrder) > availableQuantity) {
            console.log(numOrder)
            return setPurchase(true)

        }
        console.log(orderQuantity)
        setPurchase(false)
        // console.log('out side if')
    }

    const handleOrder = (event) => {
        event.preventDefault();

    }
    return (
        <>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">{name}</h1>
                        <p class="py-6">{description}</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <h1 className='text-3xl font-bold text-center'>Order Form</h1>
                            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                                <input name='name' disabled type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" value={user?.displayName || ''} />

                                <input name='email' disabled value={user?.email || ''} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />

                                <input onChange={handleQunatity} value={orderQuantity} name='quantity' type="number" placeholder={part.minOrderQuantity} className="input input-bordered w-full max-w-xs" />

                                <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                <button disabled={purchase} type='submit' className={`btn ${purchase ? 'btn-accent' : 'btn-secondary'} w-full max-w-xs`}>Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;