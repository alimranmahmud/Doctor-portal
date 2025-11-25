import React from 'react';
const Banner = () => {
    return (
       <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src='chair.png' className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Smart Booking System</h1>
                    <p className="py-6">The portal helps patients receive quick consultations and digital prescriptions. It also keeps medical records organized and easy to access.</p>
                    <button className='btn'>Getting Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;