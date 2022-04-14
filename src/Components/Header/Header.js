import React from 'react';
import './Header.css';
import logo from './../../bed1e771e6acdf980979319392eabf04.webp';
import Usefirebase from '../Hooks/Usefirebase';

const Header = () => {
    const { useri, handleSignOut } = Usefirebase();
    console.log(useri);
    return (
        <div className='header-container'>
            <div className="header-img flex items-center ">
                <img className='w-[100px]' src={logo} alt="" />
                <h2 className=' text-2xl font-bold uppercase text-white'>Tech Geeks</h2>
            </div>
            <div className='flex items-center'>
                <nav className='  text-white mr-2 '>
                    <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300 ' href="/home">Home</a>
                    <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5  hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/about">About</a>
                    <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/products">Products</a>
                    {
                        useri ? <a onClick={handleSignOut} className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/login">Sign Out</a> : <a className='mx-5 text-lg border-[1px] shadow-2xl border-white py-3 px-5 hover:bg-white hover:text-[#5F50D9] font-semibold duration-300' href="/login">Login</a>
                    }


                </nav>
                <div>

                    useri ? <div className='flex items-center'>

                        <p className=' mr-4 text-white'>{useri?.displayName}</p>
                        <img className='w-[50px] rounded-full' src={useri?.photoURL} alt="" />
                    </div> :


                </div>
            </div>


        </div>
    );
};

export default Header;