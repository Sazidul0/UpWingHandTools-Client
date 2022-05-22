import React from 'react';
import country from '../../images/coronavirus.png';
import projects from '../../images/tool-box.png';
import clients from '../../images/group.png';
import feedback from '../../images/comment.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const BusinessSummary = () => {



    return (
        <div className='mb-28'>
            <div className='py-5'>
                <h2 className='text-4xl flex justify-center text-teal-500 font-bold uppercase'>Millions Users & Business Trust Us</h2>
                <h3 className='text-2xl flex justify-center'>We Try to Understand Users Expectation</h3>
                {/* <div className='bg-teal-500 flex justify-center w-12' style={{ height: '2px' }}></div> */}
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4 sm:px-8 md:px-10 lg:px-48'>
                <div className='flex justify-center'>
                    <div className='text-center'>
                        <img className='w-16 ml-2' src={country} alt="Country" />
                        <h2 className='text-4xl font-bold'>
                            <CountUp end={72} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h2>
                        <h4 className='text-xl text-teal-500'>Countrys</h4>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='text-center'>
                        <img className='w-16 ml-14' src={projects} alt="Country" />
                        <h2 className='text-4xl font-bold'>
                            <CountUp end={8000000} redraw={true} suffix='+'>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h2>
                        <h4 className='text-xl text-teal-500'>Sold Items</h4>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='text-center'>
                        <img className='w-16 ml-5' src={clients} alt="Country" />
                        <h2 className='text-4xl font-bold'>
                            <CountUp end={7035} redraw={true} suffix='+'>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h2>
                        <h4 className='text-xl text-teal-500'>Happy Clients</h4>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='text-center'>
                        <img className='w-16 ml-6' src={feedback} alt="Country" />
                        <h2 className='text-4xl font-bold'>
                            <CountUp end={4193} redraw={true} suffix='+'>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </h2>
                        <h4 className='text-xl text-teal-500'>Feedback</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummary;