import React from 'react';
import gglLogo from './../../google-brands.svg';
import gitLogo from './../../github-brands.svg';
import fbLogo from './../../facebook-brands.svg';
import { Link } from 'react-router-dom';
import Toggle from '../Hooks/toggleRegiLog';
import Usefirebase from '../Hooks/Usefirebase';

const Login = () => {
    const handleLinkLogin = () => {
        const [visibilty, setVisibilty] = Toggle();
        setVisibilty(1);
        console.log(visibilty);
    }
    const { signIn, user } = Usefirebase();

    return (
        <div className='w-[400px]  absolute right-3 top-24 h-[650px] bg-[white] border-black  rounded-lg register shadow-black mx-auto border-2 '>
            <p className='text-5xl text-center my-[30px] font-semibold text-[#5F50D9]'>LOG IN</p>

            <input className='block w-[99%] h-[50px] mb-[20px] mx-auto border-black border-2' type="email" name="" id="" placeholder='Your Email' />

            <input className='block w-[99%] h-[50px] mb-[20px] mx-auto border-black border-2' placeholder='Your Password' type="password" name="" id="" />
            <div className='flex items-center justify-evenly'>
                <button className='uppercase text-2xl rounded-3xl border-[2px] border-[#422eda] px-10 font-semibold py-5'>
                    LOGIN
                </button>
                <Link onClick={handleLinkLogin} className='text-[#422eda]' to='/home'>Not Registered ?</Link>
            </div>

            <br />
            <br />
            <button onClick={signIn} className='uppercase  w-full text-2xl rounded-3xl border-[2px] border-[#422eda] px-5 font-semibold py-2 flex items-center justify-around'>
                <img className='w-[40px]' src={gglLogo} alt="" />
                <span className='block '>LOGIN With Google</span>
            </button>
            <br />
            <button className='uppercase block w-full text-2xl rounded-3xl border-[2px] flex items-center justify-around border-[#422eda] px-5 font-semibold py-2'>
                <img className='w-[40px]' src={gitLogo} alt="" />
                <span className='block '>LOGIN With Github</span>
            </button>
            <br />
            <button className='uppercase block w-full text-2xl rounded-3xl border-[2px] flex items-center justify-around border-[#422eda] px-5 font-semibold py-2'>
                <img className='w-[40px]' src={fbLogo} alt="" />
                <span className='block '>LOGIN With Facebook</span>
            </button>

        </div>
    );
};

export default Login;