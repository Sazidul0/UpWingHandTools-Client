import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const Dashboard = () => {

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <h2 className='text-3xl font-bold text-teal-500'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/paid">Paid Orders</Link></li>
                        <li><Link to="/dashboard/unpaid">Unpaid Orders</Link></li>

                        <li><Link to="/dashboard/users">All Users</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;