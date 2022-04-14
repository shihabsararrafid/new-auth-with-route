import check from './../../pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg';
import React from 'react';

const Succesful = () => {
    return (
        <div className='w-[240px] h-[40px] mx-auto  bg-white text-black border-2 border-blue-500 rounded-lg flex items-center justify-center'>
            <img className='w-[30px]' src={check} alt="" />    <h1 className='font-semibold'>Registration Succesful</h1>

        </div>
    );
};

export default Succesful;