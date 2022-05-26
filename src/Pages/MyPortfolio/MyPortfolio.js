import React, { useEffect } from 'react';
import './MyPortfolio.css';
import avaterImg from '../../images/portfolio/mf-avatar.svg';
import webImg from '../../images/portfolio/hero.svg';
import webDevImg from '../../images/portfolio/webdev.svg';
import refreshresurces from '../../images/Mywork/refreshresources.PNG';
import smithAndClick from '../../images/Mywork/smithandclick.PNG';
import alionware from '../../images/Mywork/alienware.PNG';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'


const MyPortfolio = () => {


    const { ref, inView } = useInView({
        threshold: 0,
    });
    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                // x: 0,
                scale: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({ scale: 0.9 })
        }
    }, [inView])





    return (
        <motion.div
            animate={{ x: 0 }}
            initial={{ x: -100 }}
        >
            <h2 className='protfolio-heading mt-10 flex justify-center'>Web Developer</h2>
            <div className='body-container'>
                <p className='flex justify-center'>I design and code beautifully simple things, and I love what I do.</p>
                <div className="card w-48  mx-auto my-10">
                    <figure><img src={avaterImg} alt="Avater" /></figure>
                </div>

                <div className='flex justify-center'>
                    <figure><img className='w-100' src={webImg} alt="Web" /></figure>
                </div>


                <div className='relative' ref={ref}>
                    <div className='text-center bg-blue-500 pt-16 pb-40 text-white mb-96'>
                        <div className='card w-3/4 lg:w-1/2 mx-auto'>
                            <h3 className='text-xl'>Hi, I’m Sazidul. Nice to meet you.</h3>
                            <p>I am Engineering student of CSE from IIUC. I have done my SSC and HSC with GPA-5. I'm quietly confident, naturally curious, and perpetually working on improving my chops one Design or Development problem at a time.</p>
                        </div>
                    </div>


                    <motion.div className=" card w-96 bg-base-100 shadow-xl mx-auto absolute web-dev-card-container "
                        animate={animation}
                    >
                        <figure><img className='w-100 mt-8' src={webDevImg} alt="Wev dev" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title flex justify-center text-2xl">Web Developer</h2>
                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>

                            <p className='text-blue-500 mt-5'>Languages I speak:</p>
                            <p className=''>HTML, CSS, Javascript</p>


                            <p className='text-blue-500 mt-5'>Tools:</p>
                            <p>Bootstrap, Tailwind, Firebase, MongoDB, NodeJs</p>

                            <p className='text-blue-500 mt-5'>Contact:</p>
                            <p>Email: <small className=''>sazidulislam.mail@gmail.com</small></p>
                        </div>
                    </motion.div>
                </div>



                <div className='pt-36 mb-20'>
                    <div className='text-center'>
                        <h2 className='text-3xl'>My Recent Work</h2>
                        <p>Here are a few design projects I've worked on recently.</p>
                    </div>

                    {/*  */}
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>


                        <div className="card w-92 bg-base-100 shadow-xl image-full mx-5">
                            <figure><img src={refreshresurces} alt="Refresh " /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Refresh Resources</h2>

                                <div className="card-actions justify-center">
                                    <a href="https://refresh-resources.web.app/" className="btn btn-primary">Visit Website</a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-92 bg-base-100 shadow-xl image-full mx-5">
                            <figure><img src={smithAndClick} alt="Refresh " /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Smith and Click</h2>

                                <div className="card-actions justify-center">
                                    <a href="https://smith-and-click.web.app/" className="btn btn-primary">Visit Website</a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-92 bg-base-100 shadow-xl image-full mx-5">
                            <figure><img src={alionware} alt="Refresh " /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Alienware</h2>

                                <div className="card-actions justify-center">
                                    <a href="https://assignment-000-009.netlify.app/" className="btn btn-primary">Visit Website</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default MyPortfolio;