import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

const SignUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const [token] = useToken(user || gUser);

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/');
        // console.log(user || gUser)
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }

    return (
        <div className="flex h-screen justify-center items-center bg-[url('/src/images/Banner/machine.jpg')]" >
            <div className="card w-96 bg-gray-200 shadow-xl mx-6 my-10">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">SignUp</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


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


                        {/* Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />

                            </>
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 caracters or longer'
                                        }
                                    })}
                                />

                            </>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        {signInError}
                        <input className='btn w-full max-w-xs text-white bg-gradient-to-r from-zinc-600 to-zinc-900 border-0' type="submit" value='SignUp' />

                    </form>

                    <p>Already have an Account? <Link className='text-primary ' to='/login'>Please LogIn</Link></p>


                    <div className="divider">OR</div>
                    <button
                        className='btn btn-outline'
                        onClick={() => signInWithGoogle()}
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;