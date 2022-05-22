import React from 'react';
import user1 from '../../images/user/user1.jpg'
import user2 from '../../images/user/user2.jpg'
import user3 from '../../images/user/user3.jpg'

const Review = () => {
    return (
        <div className='lg:mx-10 md:mx-10 pb-28'>
            <h2 className='text-3xl py-5 font-bold flex justify-center text-teal-500'>Customer Review</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-gray-200 rounded-lg'>
                    <div class="avatar flex justify-center py-5">
                        <div class=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img className='' src={user1} alt="User1" />
                        </div>
                    </div>
                    <div className="text-center pb-5 px-3">
                        <p>Greate quality products and fast shipping. I am happy with the product</p>
                        <h3 className='text-xl font-bold text-teal-500 pt-4'>Mishel</h3>
                        <p>California</p>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg'>
                    <div class="avatar flex justify-center py-5">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user2} alt="User1" />
                        </div>
                    </div>
                    <div className="text-center pb-5 px-3">
                        <p>I am happy with the Hammers and the deal I fot from them. I wanted a good qualily hammer with a wooden handle.</p>
                        <h3 className='text-xl font-bold text-teal-500 pt-4'>Smith</h3>
                        <p>Netherlands</p>
                    </div>
                </div>
                <div className='bg-gray-200 rounded-lg'>
                    <div class="avatar flex justify-center py-5">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user3} alt="User1" />
                        </div>
                    </div>
                    <div className="text-center pb-5 px-3">
                        <p>Products quality are good, I ordered 600 wrenchs and they all are great.</p>
                        <h3 className='text-xl font-bold text-teal-500 pt-4'>Amelia</h3>
                        <p>Switzerland</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;