import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '457750c4c28c3ce5845de939dc612cc2';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newProduct = {
                        name: data.name,
                        email: user.email,
                        img: img,
                        price: parseFloat(data.price),
                        minOrderQuantity: parseFloat(data.minorder),
                        availableQuantity: parseFloat(data.available),
                        description: data.description
                    }
                    // send to your database 
                    fetch('https://warm-chamber-44220.herokuapp.com/addproduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })
                }

            })
    }

    return (
        <div className='w-full mx-auto flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto border rounded-md py-4 px-8 shadow-md shadow-emerald-400 bg-gradient-to-r from-indigo-100'>
                <h1 className='text-2xl font-bold text-accent text-center mb-3'>Add Your new Product</h1>
                {/* name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered input-sm w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                {/* price */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Price"
                        className="input input-bordered input-sm w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'Price is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>
                {/* avaiable quantity */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available quantity"
                        className="input input-bordered input-sm w-full max-w-xs"
                        {...register("available", {
                            required: {
                                value: true,
                                message: 'Available quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                    </label>
                </div>
                {/* minimum quantity */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order quantity"
                        className="input input-bordered input-sm w-full max-w-xs"
                        {...register("minorder", {
                            required: {
                                value: true,
                                message: 'Minimum Order quantity is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.minorder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minorder.message}</span>}
                    </label>
                </div>
                {/* product description  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea
                        rows='6'
                        type="number"
                        placeholder="Product Description"
                        className="input input-bordered input-sm w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Product Description is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>
                {/* Image file  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn btn-sm w-full max-w-xs text-white' type="submit" value="Add" />
            </form >
        </div >
    );
};

export default AddProduct;