import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import HowCanWeHelp from './HowCanWeHelp';
import OurApp from './OurApp/OurApp';
import { motion } from "framer-motion"
import Tools from './Tools';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <UserReview></UserReview>
            <OurApp></OurApp>
            <HowCanWeHelp></HowCanWeHelp>
        </motion.div>
    );
};

export default Home;