
import React, { useEffect } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user || gUser)
    let from = location.state?.from?.pathname || "/";



    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const resetPassword = async () => {
        console.log(register)
        // event.preventDefault();
        // const email = emailRef.current.value;
        // if (email) {
        //     await sendPasswordResetEmail(email);
        //     toast.success('Email Send');
        // }
        // else {
        //     toast("Please enter your email address")
        // }
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className="flex h-screen justify-center items-center  bg-[url('/src/images/Banner/machine.jpg')]">
            <div className="card w-96 bg-gray-200 shadow-xl mx-6">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Email Input */}
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
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
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        {/* Password InPut */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label> <input
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        {signInError}
                        <input className='btn w-full max-w-xs text-white bg-gradient-to-r from-zinc-600 to-zinc-900 border-0' type="submit" value='Login' />

                    </form>

                    <p className='text-center mt-2 '>Forget Password?<button onClick={resetPassword} className='btn btn-link mt-2 text-primary' to='/signup'> Reset Password</button></p>

                    <p>New to Upwing? <Link className='text-primary ' to='/signup'>Create New Account</Link></p>


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

export default Login;