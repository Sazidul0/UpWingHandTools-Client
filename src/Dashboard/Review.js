import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);


    let imageUrl;
    if (user.photoURL) {
        imageUrl = user.photoURL;
    }
    else {
        imageUrl = 'https://i.ibb.co/5MzC880/user.png';
    }


    const onSubmit = data => {
        const rating = data.rating;
        if (rating > 0 && rating < 6) {
            const review = {
                name: user.displayName,
                img: imageUrl,
                address: data.address,
                rating: rating,
                feedback: data.feedback
            }
            // console.log(review)
            fetch(`http://localhost:5000/review`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(inserted => {
                    if (inserted.insertedId) {
                        toast.success("Thank you so much for your review!")
                        reset();
                    }
                    else {
                        toast.error('Failed operation! Please try again.')
                    }
                })
        }
        else {
            toast("Please provide rating from 1 to 5");
        }
    }

    return (
        <div className='flex justify-center mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-200 px-20 rounded-lg pb-10'>
                <h2 className='text-2xl text-center mt-12'>Add a Review</h2>
                {/* Name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <>
                        <input
                            style={{ width: '400px' }}
                            type="text"
                            value={user?.displayName}
                            className="input input-bordered w-full max-w-xs"

                        />

                    </>

                </div>



                {/* Address Info */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User Address</span>
                    </label>
                    <>
                        <input
                            type="text"
                            placeholder="Where you from?"
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



                {/* Rating */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating(1 to 5)</span>
                    </label>
                    <>
                        <input
                            type="text"
                            placeholder="Please Give a Rating"
                            className="input input-bordered w-full max-w-xs"
                            {...register("rating", {
                                required: {
                                    value: true,
                                    message: 'Rating is Required'
                                },

                            })}
                        />

                    </>
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>



                {/* Feedback*/}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">User Feedback</span>
                    </label>
                    <>
                        <textarea
                            type="text"
                            placeholder="Provide your Feedback"

                            className="textarea textarea-accent"
                            {...register("feedback", {
                                required: {
                                    value: true,
                                    message: 'feedback is Required'
                                },

                            })}
                        ></textarea>

                    </>
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>


                <input className='btn w-full max-w-xs text-white' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default Review;