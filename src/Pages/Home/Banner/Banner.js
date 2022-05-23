import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div style={{ height: '650px' }} className="bg-[url('/src/images/Banner/banner.png')] flex items-center banner-container">
            <div className='px-48 banner-text-container'>
                <h1 className='text-white text-6xl py-5'>Need New Tools?</h1>
                <p className='text-white pb-5'>Upwing Hand Tools company provides users with a wide range of hand tools and power tools that meet the needs of various job sites and applications. Upwing continues to innovate, so you have the right tools for your tasks.</p>
                <Link to='/tools' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Visit Tools</Link>
            </div>
        </div>
    );
};

export default Banner;