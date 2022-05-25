import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';

import Tools from './Tools';
import UserReview from './UserReview/UserReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;