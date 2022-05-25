import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import './UserReview.css'
import ratingImg from '../../../images/icon/ratingImg.png'

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review`)
            .then(res => res.json())
            .then(result => {
                setReviews(result);
            })
    }, [])


    const [width, setWidth] = useState(0);

    const carousel = useRef();

    useEffect(() => {

        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        // console.log(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [carousel?.current?.offsetWidth])

    // console.log(reviews);

    return (
        <div className='App'>
            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className="carousel">
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                    {
                        reviews.map((review, index) => {
                            return (
                                <motion.div className='item' key={index}>



                                    <div className='bg-gray-200 rounded-lg shadow-lg'>
                                        <div className="avatar flex justify-center py-5">
                                            <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img className='' src={review.img} alt="User1" />
                                            </div>
                                        </div>
                                        <p className='absolute ml-40'><b>Rating: </b>{review.rating} </p>


                                        <img style={{ width: '15px' }} className='ml-10 relative top-1 left-48 mb-5' src={ratingImg} alt="" />

                                        <div className="text-center pb-5 px-3">
                                            <p>{review.feedback}</p>
                                            <h3 className='text-xl font-bold text-teal-500 pt-4'>{review.name}</h3>
                                            <p>{review.address}</p>
                                        </div>
                                    </div>



                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div>
    );
};

export default UserReview;