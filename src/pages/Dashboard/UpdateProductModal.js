import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateProductModal = ({ updateProduct, setUpdateProduct, refetch }) => {
    const { price, minOrderQuantity, availableQuantity, _id } = updateProduct;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const addedQuantity = data.addedQuantity;
        const newQuantity = (parseFloat(addedQuantity) + availableQuantity)

        const updatedProduct = {
            price: data.newPrice,
            availableQuantity: newQuantity,
            minOrderQuantity: data.minorder
        }
        fetch(`http://localhost:4000/updateParts/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Product update successfully done !!')
                }
                else {
                    toast.error('Update failed')
                }

            })
        reset();
        setUpdateProduct(null)
    }
    return (
        <div>
            <input type="checkbox" id="product-update-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="product-update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="font-bold text-lg">Congratulations random Interner user!.....{name}</h3> */}
                    <form onSubmit={handleSubmit(onSubmit)} className='mx-auto border rounded-md py-4 px-8 shadow-md shadow-orange-500 bg-gradient-to-r from-pink-300'>
                        <h1 className='text-2xl font-bold text-accent text-center mb-3'>Add Your new Product</h1>

                        {/* price */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder={`Current Price is ${price}`}
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("newPrice", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.newPrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.newPrice.message}</span>}
                            </label>
                        </div>
                        {/* avaiable quantity */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder={`Available quantity is ${availableQuantity}`}
                                className="input input-bordered input-sm w-full max-w-xs"
                                {...register("addedQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available quantity is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.addedQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.addedQuantity.message}</span>}
                            </label>
                        </div>
                        {/* minimum quantity */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input
                                type="number"
                                placeholder={`Minimum Order quantity is ${minOrderQuantity}`}
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

                        {/* Image file  */}
                        {/* <div className="form-control w-full max-w-xs">
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
                        </div> */}

                        <input className='btn btn-sm w-full max-w-xs text-white' type="submit" value="Update" />
                    </form >
                </div>
            </div>
        </div>
    );
};

export default UpdateProductModal;