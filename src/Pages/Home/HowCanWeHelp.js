import React from 'react';
import contactUs from '../../images/icon/contact-us.png'
import warranty from '../../images/icon/warranty.png'
import service from '../../images/icon/service.png'

const HowCanWeHelp = () => {
    return (
        <div className='flex justify-center my-20'>
            <div>
                <h2 className='flex justify-center text-3xl text-teal-500 font-bold mt-12 lg:mt-3 mb-8'>HOW CAN WE HELP?</h2>
                <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className="card w-96 ">
                        <figure><img src={contactUs} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <div className='text-center'>
                                <h2 className="flex justify-center card-title">CONTACT US</h2>
                                <p>Have a question? Need help? <br />
                                    Click here to contact us.</p>

                            </div>
                        </div>
                    </div>


                    <div className="card w-100 ">
                        <figure><img src={warranty} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <div className='text-center'>
                                <h2 className="flex justify-center card-title">WARRANTY</h2>
                                <p>Questions about the warranty of your product? <br />
                                    Learn more on our Warranty page.</p>

                            </div>
                        </div>
                    </div>


                    <div className="card w-96 ">
                        <figure><img src={service} alt="Shoes" /></figure>
                        <div className="card-body ">
                            <div className='text-center'>
                                <h2 className="flex justify-center card-title">SERVICE</h2>
                                <p>Have a tool that needs to be serviced? <br />
                                    We’ll help you get back to work.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowCanWeHelp;