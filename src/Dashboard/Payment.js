import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0nR1GypfIe6ms7JAJtszTGuRcc6YwHoiGsnC1wYQDKKyZKfRJbUDrlDcY5vlSIUOc0SsC2NtjUW2EJiXA9FP6J00TuO8ITrd')

const Payment = () => {
    const { id } = useParams();
    const url = `https://upwing-hand-tools.herokuapp.com/order/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='mx-5'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-8">
                <div className="card-body">
                    <p className='text-success text-xl'>Hello, <b>{order.userName}</b></p>
                    <h2 className="card-title">Please Pay for <b>{order.order}</b></h2>
                    <p>Quantity <span className=''><b>{order.quantity}</b></span> </p>
                    <p>Address <span className=''><b>{order.address}</b></span> </p>
                    <p>Phone <span className=''><b>{order.phone}</b></span> </p>
                    <p>Please Pay: <b>${order.price}</b></p>
                </div>
            </div>

            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;