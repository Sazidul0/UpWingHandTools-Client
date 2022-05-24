import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';

const ManageOrders = () => {

    const navigate = useNavigate();
    const url = 'http://localhost:5000/allorder';
    const { data: order, isLoading, refetch } = useQuery(['order'], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    }));



    if (isLoading) {
        return <Loading></Loading>
    }





    const handlePanding = id => {

        fetch(`http://localhost:5000/allorder/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                refetch();
                // console.log(data)
            })
    }



    const handleDelete = id => {
        fetch(`http://localhost:5000/allorder/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                refetch();
                // console.log(data)
            })
    }

    return (
        <div>
            <h2 className='flex justify-center text-2xl'>All Orders: {order.length}</h2>
            <div className="overflow-x-auto mx-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>User Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            order.map((a, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.order}</td>
                                <td>{a.quantity}</td>
                                <td>{a.userName}</td>
                                <td>{a.price}</td>
                                <td>{a.address}</td>
                                <td>{a.phone}</td>
                                <td>
                                    {(a.price && !a.paid) && <div><span className='font-bold mr-5'>UnPaid</span><button onClick={() => handleDelete(a._id)} className='btn btn-xs btn-error'>Delete</button></div>}

                                    {(a.price && a.paid === 'panding') && <div>
                                        <p><button onClick={() => handlePanding(a._id)} className='btn btn-xs btn-success'>Panding</button></p>

                                    </div>}
                                    {(a.price && a.paid === 'paid') && <div>
                                        <p><span className='font-bold'>Shipped</span></p>
                                    </div>}
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;