import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllTool = ({ tool }) => {

    const { _id, name, img, description, minQuantity, availableQuantity, price } = tool;
    const navigate = useNavigate();

    const navigateToToolDetails = id => {
        navigate(`/tool/${id}`);
    }

    return (
        <div className="card w-100 bg-base-100 shadow-xl mx-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><b>Description:</b>{description}</p>
                <p><b>Minimum Quantity:</b> {minQuantity}</p>
                <p><b>Available Quantity:</b> {availableQuantity}</p>
                <p><b>Price Per Unit:</b> ${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToToolDetails(_id)} className="btn bg-gradient-to-r from-zinc-600 to-zinc-900 border-0">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllTool;