import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Pages/Shared/Loading';

const ManageProduct = () => {



    const url = 'http://localhost:5000/tools';
    const { data: tools, isLoading, refetch } = useQuery(['order'], () => fetch(url,).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDelete = id => {
        const confirmation = window.confirm("Do you want to delete?");
        if (confirmation) {
            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success(`Deleted successfully!`)
                })
        }
        else {
            toast.error('Failed to Delete')
        }
    }


    return (
        <div>
            <h2 className='text-2xl flex justify-center'>Manage all Product: {tools.length}</h2>

            <div className="overflow-x-auto mx-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            tools.map((tool, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{
                                    <div class="avatar">
                                        <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={tool.img} alt="Tool Img" />
                                        </div>
                                    </div>
                                }</td>
                                <td>{tool.name}</td>
                                <td>{tool.minQuantity}</td>
                                <td>{tool.availableQuantity}</td>
                                <td>{tool.price}</td>
                                <td><button onClick={() => handleDelete(tool._id)} className='btn btn-xs btn-error'>Delete</button></td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;