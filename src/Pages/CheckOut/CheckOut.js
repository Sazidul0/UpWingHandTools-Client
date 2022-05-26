import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const CheckOut = () => {

    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`https://upwing-hand-tools.herokuapp.com/tools/${toolId}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])

    const { _id, name, img, description, minQuantity, availableQuantity, price } = tool;

    const [user] = useAuthState(auth)

    const [disableBtn, setDisableBtn] = useState(false);


    const handleProceedCheckout = event => {
        event.preventDefault();
        const UserQuantity = event.target.quantity.value;

        const order = {
            orderId: _id,
            order: name,
            user: event.target.email.value,
            userName: event.target.name.value,
            quantity: UserQuantity,
            address: event.target.address.value,
            phone: event.target.phone.value,
            price: UserQuantity * price
        }

        if (minQuantity > UserQuantity) {
            toast.error(`You have to select Minimun Quanity: ${minQuantity}`)
            setDisableBtn(true);
        }
        else if (UserQuantity > availableQuantity) {
            toast.error(`You can't Selet more than ${availableQuantity}`)
            setDisableBtn(true);
        }

        else {

            fetch('https://upwing-hand-tools.herokuapp.com/order', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success(`Your order is placed. Please pay: $${price * UserQuantity} to complete your order`);
                        event.target.reset();
                    }
                })
        }
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-8'>
            <div className="card w-100 bg-base-100 shadow-xl mb-8 mt-12">
                <figure><img className='w-1/2' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><b>Description:</b>{description}</p>
                    <p><b>Minimum Quantity:</b> {minQuantity}</p>
                    <p><b>Available Quantity:</b> {availableQuantity}</p>
                    <p><b>Price Per Unit:</b> ${price}</p>
                </div>
            </div>

            <div className='mt-10 mx-auto'>
                <form className='' onSubmit={handleProceedCheckout}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input style={{ width: '600px' }} type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input style={{ width: '600px' }} type="email" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input style={{ width: '600px' }} type="number" name='quantity' defaultValue={minQuantity} className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input style={{ width: '600px' }} type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input style={{ width: '600px' }} type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <input disabled={disableBtn} type="submit" className='btn bg-gradient-to-r from-zinc-600 to-zinc-900 border-0 mt-6 mb-12' value="Proceed Checkout" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;