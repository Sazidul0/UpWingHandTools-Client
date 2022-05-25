import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Pages/Shared/Loading';

const MyOrders = () => {

    // const [order, setOrder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {
    //         fetch(`http://localhost:5000/order?user=${user.email}`, {
    //             method: 'GET',
    //             headers: {
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => {
    //                 if (res.status === 401 || res.status === 403) {
    //                     signOut(auth);
    //                     localStorage.removeItem('accessToken')
    //                     navigate('/');
    //                 }
    //                 return res.json()
    //             })
    //             .then(data => setOrder(data))

    //     }
    // }, [user])


    const url = `http://localhost:5000/order?user=${user.email}`;
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



    const handleDelete = (id, name) => {
        const confirmation = window.confirm("Delete this product");
        if (confirmation) {
            fetch(`http://localhost:5000/allorder/${id}`, {
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
        <div className='mx-4 mb-20'>
            <h2 className='text-2xl flex justify-center my-3'>My Orders: {order.length}</h2>
            <div className="overflow-x-auto">
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
                                    {(a.price && !a.paid) && <div>
                                        <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success mr-3'>Pay</button></Link>
                                        <button onClick={() => handleDelete(a._id, a.order)} className='btn btn-xs btn-error'>Cancel</button>
                                    </div>}

                                    {(a.price && a.paid === 'panding') && <p className='font-bold'>Panding</p>}
                                    {(a.price && a.paid === 'paid') && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>TransactionId: <span className='text-success'><br /> {a.transactionId}</span></p>
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

export default MyOrders;