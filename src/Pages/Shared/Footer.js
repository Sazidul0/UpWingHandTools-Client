import React from 'react';
import location from '../../images/icon/pin.png'
import phone from '../../images/icon/phone-call.png'
import mail from '../../images/icon/email.png'

const Footer = () => {
    return (
        <div className="bg-[url('/src/images/footer.png')] text-teal-400 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-10">
            <div className=''>
                <h2 className='text-3xl'>Upwing Hand Tools</h2>
                <p>Upwing Hand Tools is a tools manufacturer website. It provides various tools acording to your needs. It provides higth quality products, However If You don't like the product. You can also return the products.</p>
            </div>
            <div className=''>
                <h3 className='text-2xl'>What we do?</h3>
                <p>We make thousands of tools and provide to the seller around the world.</p>
                <div className='bg-teal-700 mx-auto ' style={{ height: '2px' }}></div>
                <p>We have 24 hour support system which is always ready for you.</p>
                <div className='bg-teal-700 mx-auto ' style={{ height: '2px' }}></div>
                <p>30 days return policy</p>
            </div>
            <div>
                <h3 className='text-2xl'>Contact Information</h3>
                <p><img className='w-5 inline' src={location} alt="Location Png" /> 620 Eighth Avenue, <br /> <span className='ml-6'>United States of America</span></p>
                <p><img className='w-5 inline' src={phone} alt="Phone Number Png" /> + 555 786 897<br /><span className='ml-6'>Mon-Sat, 9:00am-7:00pm</span></p>
                <p><img className='w-5 inline' src={mail} alt="Email Png" /> upwingtools@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;