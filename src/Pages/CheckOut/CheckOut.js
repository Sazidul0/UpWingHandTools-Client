import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CheckOut = () => {

    const { toolId } = useParams();
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${toolId}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])

    const { _id, name, img, description, minQuantity, availableQuantity, price } = tool;

    const handleProceedCheckout = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;

        console.log(name, email, quantity, address, phone)
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:ml-8'>
            <div class="card w-100 bg-base-100 shadow-xl mb-8 mt-12">
                <figure><img className='w-1/2' src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p><b>Description:</b>{description}</p>
                    <p><b>Minimum Quantity:</b> {minQuantity}</p>
                    <p><b>Available Quantity:</b> {availableQuantity}</p>
                    <p><b>Price Per Unit:</b> ${price}</p>
                </div>
            </div>

            <div className='mt-10 mx-auto'>
                <form className='' onSubmit={handleProceedCheckout}>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your name</span>
                        </label>
                        <input style={{ width: '600px' }} type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Email</span>
                        </label>
                        <input style={{ width: '600px' }} type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Quantity</span>
                        </label>
                        <input style={{ width: '600px' }} type="number" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input style={{ width: '600px' }} type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Phone</span>
                        </label>
                        <input style={{ width: '600px' }} type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" required />
                    </div>

                    <input type="submit" className='btn bg-gradient-to-r from-zinc-600 to-zinc-900 border-0 mt-6 mb-12' value="Proceed Checkout" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;