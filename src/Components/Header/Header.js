import React from 'react';
import './Header.css';
import logo from './../../bed1e771e6acdf980979319392eabf04.webp';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-img flex items-center ">
                <img className='w-[100px]' src={logo} alt="" />
                <h2 className=' text-2xl font-bold uppercase text-white'>Tech Geeks</h2>
            </div>
            <nav className='  text-white mr-20 '>
                <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300 ' href="/home">Home</a>
                <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5  hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/about">About</a>
                <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/products">Products</a>
                <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;