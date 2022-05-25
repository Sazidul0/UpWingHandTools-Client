import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Profile = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [updatedInfo, setUpdatedInfo] = useState({});

    useEffect(() => {
        const email = user.email;
        // console.log(email)
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(result => {
                setUpdatedInfo(result);
            })
    }, [user?.email])

    let imageUrl;
    if (user.photoURL) {
        imageUrl = user.photoURL;
    }
    else {
        imageUrl = 'https://i.ibb.co/5MzC880/user.png';
    }

    const onSubmit = data => {
        // console.log(data);
        const email = user.email;
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    toast.success("User Info Updated successfully")
                    setUpdatedInfo(data);
                    reset();
                }
                else {
                    toast.error("Operation failed !")
                }

            })

    }






    return (
        <div>

            <div className='grid sm:grid-cols-2 grid-cols-1 '>
                <div class="card w-96 bg-gray-200 shadow-xl my-8 mx-auto">
                    <h2 className='text-2xl flex justify-center mb-5 mt-3'>My Profile</h2>
                    <figure>
                        <div class="avatar online">
                            <div class="w-28 rounded-full">
                                <img src={imageUrl} alt='User Img' />
                            </div>
                        </div>
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title flex justify-center font-bold">{user.displayName}</h2>
                        <p>Email: <b>{user?.email}</b></p>
                        <p>Address: <b>{updatedInfo?.address}</b></p>
                        <p>Address: <b>{updatedInfo?.education}</b></p>
                        <p>Number: <b>{updatedInfo?.phone}</b></p>
                        <p>LinkedIn Profile: <b>{updatedInfo?.linkedIn}</b></p>
                    </div>
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="my-8 mx-auto">
                    <h2 className='text-2xl flex '>Update Profile</h2>
                    {/* Educational Info */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Educational Info</span>
                        </label>
                        <>
                            <input
                                type="text"
                                style={{ width: '400px' }}
                                placeholder=" Education"
                                className="input input-bordered w-full max-w-xs"
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>



                    {/* Address Info */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address Info</span>
                        </label>
                        <>
                            <input
                                type="text"
                                placeholder="Your Location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>


                    {/* Phone */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <>
                            <input
                                type="number"
                                placeholder="Your Number"
                                className="input input-bordered w-full max-w-xs"
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>



                    {/* Linked In */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn Profile</span>
                        </label>
                        <>
                            <input
                                type="text"
                                placeholder="Your LinkedIn"
                                className="input input-bordered w-full max-w-xs"
                                {...register("linkedIn", {
                                    required: {
                                        value: true,
                                        message: 'LinkedIn is Required'
                                    },

                                })}
                            />

                        </>
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>


                    <input className='btn w-full max-w-xs text-white' type="submit" value='Update Info' />
                </form>

            </div>
        </div>
    );
};

export default Profile;