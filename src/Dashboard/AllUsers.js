import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl flex justify-center'>All Users: {users.length}</h2>
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
                            users.map((user, index) => <UserRow key={user._id} user={user} index={index} setUsers={setUsers}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;