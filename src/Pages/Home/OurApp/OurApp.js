import React from 'react';
import upwingBanner from '../../../images/Banner/upwingApp.png'
import './OurApp.css'

const OurApp = () => {
    return (
        <div className='relative-container mb-80 lg:mb-60  mt-14'>
            <div >
                <img src={upwingBanner} alt="" />
            </div>
            <div style={{ width: '60%' }} className=' position-container bg-base-100'>
                <div className='text-center p-5'>
                    <h2 className='text-3xl text-teal-500'>My Upwing</h2>
                    <p>Join My Upwing to register your tools and help protect your investment, rate and review products you love, and learn about the newest Upwing tools and accessories</p>
                    <button className="btn bg-gradient-to-r from-zinc-600 to-zinc-900 border-0 my-5">Register Now</button>
                </div>
            </div>
        </div>
    );
};

export default OurApp;