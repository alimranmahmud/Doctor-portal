import React from 'react';
import Banner from './Banner';
import InfoCards from './InfoCards';
import Services from './Sevices';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;