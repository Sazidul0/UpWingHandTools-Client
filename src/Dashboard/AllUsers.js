
import { useQuery } from 'react-query';
import UserRow from './UserRow';
import Loading from '../Pages/Shared/Loading';

const AllUsers = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://upwing-hand-tools.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mb-10'>
            <h2 className='text-2xl font-bold py-2 flex justify-center'>All Users: {users.length}</h2>
            <div className="overflow-x-auto mx-5">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Other</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;