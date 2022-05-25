import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import HowCanWeHelp from './HowCanWeHelp';
import OurApp from './OurApp/OurApp';

import Tools from './Tools';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <UserReview></UserReview>
            <OurApp></OurApp>
            <HowCanWeHelp></HowCanWeHelp>
        </div>
    );
};

export default Home;