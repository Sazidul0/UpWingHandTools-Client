import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import icon from '../../images/icon/toolsIcon.png';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tools'>Tools</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>My Portfolio</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>


        <li>{user ? <button onClick={logOut} className='btn btn-ghost'>SignOut</button> : <Link to="/login" >Login</Link>}</li>
    </>

    return (
        <div>
            <div className="navbar  bg-neutral">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>
                        <img className='w-10' src={icon} alt="Tools Icon" /><h3 className='website-name text-3xl text-teal-500'>Upwing Hand Tools</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0 text-white">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>

            </div>
            {/* <div style={{ height: '8px' }} className='bg-black'></div> */}
        </div>
    );
};

export default Navbar;