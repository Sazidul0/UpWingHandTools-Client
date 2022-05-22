import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/icon/toolsIcon.png';

const Navbar = () => {

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>

    return (
        <div>
            <div class="navbar  bg-neutral">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link class="btn btn-ghost normal-case text-xl" to='/'>
                        <img className='w-10' src={icon} alt="Tools Icon" />
                    </Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-white">
                        {menuItems}
                    </ul>
                </div>

            </div>
            <div style={{ height: '8px' }} className='bg-black'></div>
        </div>
    );
};

export default Navbar;