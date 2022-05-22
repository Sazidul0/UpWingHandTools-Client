import React from 'react';

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
                <p>We have 24 hour support system which is always ready for you.</p>
                <p>30 days return policy</p>
            </div>
            <div>
                <h3 className='text-2xl'>Contact Information</h3>
                <p>620 Eighth Avenue, United States of America</p>
                <p>+ 555 786 897 Mon-Sat, 9:00am-7:00pm</p>
                <p>upwingtools@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;