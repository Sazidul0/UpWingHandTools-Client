import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const imgStorageKey = '4739d6fd29f8a0ed8b6619765a037d52';

    const onSubmit = async data => {
        // console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        availableQuantity: data.availableQuantity,
                        minQuantity: data.minQuantity,
                        price: data.price
                    }
                    // Sending data to the database
                    fetch(`http://localhost:5000/tools`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Tool added succesfully")
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Tool')
                            }
                        })

                }
            })
    }


    return (
        <div className='mt-5'>

            <div className='flex justify-center mb-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-200 px-20 pb-10 rounded-lg">
                    <h2 className='text-2xl mt-3 flex justify-center font-bold'>Add a new Tool</h2>


                    {/* Name */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>



                    {/* Description */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <>
                            <textarea
                                type="text"
                                placeholder="Description"

                                className="textarea textarea-accent"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },

                                })}
                            ></textarea>

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>



                    {/* Image */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>






                    {/* Minimun quantity */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Quantity</span>
                        </label>
                        <>
                            <input
                                type="number"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("minQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Minimun Quantity is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>



                    {/* Maximum Quantity */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Maximun Quantity</span>
                        </label>
                        <>
                            <input
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("availableQuantity", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>


                    {/* Price */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price Per Unit</span>
                        </label>
                        <>
                            <input
                                type="number"
                                placeholder="Price Per Unit"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>


                    <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;