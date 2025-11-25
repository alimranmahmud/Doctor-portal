import React from 'react';

const HistoryData = ({data}) => {
    return (
        <div className='flex justify-between items-center gap-10'>
            
            <h3>Name: {data.name}</h3>
            <h4>Email: {data.email}</h4>
            <button className='border-rounded rounded-full bg-amber-300 p-2 text-white'>pending</button>
        </div>
    );
};

export default HistoryData;