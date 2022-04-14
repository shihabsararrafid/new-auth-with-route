import React from 'react';
import cross from '../../images.png';
const Unsuccessgul = () => {
    return (
        <div className='w-[240px] h-[40px] mx-auto bg-white text-black border-2 border-blue-500 rounded-lg flex items-center justify-center'>
            <img className='w-[20px]' src={cross} alt="" />    <h1 className='ml-2 font-semibold'>Registration Unsuccesful</h1>

        </div>
    );
};

export default Unsuccessgul;