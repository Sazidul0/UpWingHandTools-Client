import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';
import { toast } from 'react-toastify';

const ManageOrders = () => {

    const navigate = useNavigate();
    const url = 'https://upwing-hand-tools.herokuapp.com/allorder';
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





    const handlePanding = (id, name) => {
        const confirmation = window.confirm("Want to ship this Product?")
        if (confirmation) {
            fetch(`https://upwing-hand-tools.herokuapp.com/allorder/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success(`Successfully shipped ${name}`)
                })
        }
        else {
            toast.error(`Failed t shipped ${name}`)
        }
    }



    const handleDelete = (id, name) => {
        const confirmation = window.confirm("Delete this product");
        if (confirmation) {
            fetch(`https://upwing-hand-tools.herokuapp.com/allorder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success(`Successfully deleted ${name}`)
                })
        }
        else {
            toast.error(`Failed to delete ${name}`)
        }
    }

    return (
        <div className='mb-20'>
            <h2 className='flex justify-center text-2xl font-bold'>All Orders: {order.length}</h2>
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
                                    {(a.price && !a.paid) && <div><span className='font-bold mr-5'>UnPaid</span><button onClick={() => handleDelete(a._id, a.order)} className='btn btn-xs btn-error'>Delete</button></div>}

                                    {(a.price && a.paid === 'panding') && <div>
                                        <p><button onClick={() => handlePanding(a._id, a.order)} className='btn btn-xs btn-success'>Panding</button></p>

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