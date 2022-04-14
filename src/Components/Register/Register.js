import React, { useState } from 'react';
import gglLogo from './../../google-brands.svg';
import gitLogo from './../../github-brands.svg';
import fbLogo from './../../facebook-brands.svg';
import { Link } from 'react-router-dom';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Toggle from '../Hooks/toggleRegiLog';

import auth from '../../Firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { updateProfile } from 'firebase/auth';
import Usefirebase from '../Hooks/Usefirebase';

const handleLink = () => {
    const [visibilty, setVisibilty] = Toggle();
    setVisibilty(0);
    console.log(visibilty);
}


const Register = ({ setVisibilty }) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
        console.log(email);
    }
    const handleNameBlur = (e) => {
        setName(e.target.value)
        // console.log(email);
    }



    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
        //console.log(password);
    }
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth);
    const signUpWithEmail = () => {
        createUserWithEmailAndPassword(email, password);
        if (!error) {
            setVisibilty(1);
        }
        else if (error) {
            setVisibilty(2);
        }

        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            console.log(name)
            console.log(user);
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

        //console.log(email);
        //console.log(password);
    }

    return (
        <div className='w-[400px]  absolute left-1/3 top-24 h-[800px] bg-[white] mt-10  rounded-lg register shadow-black  border-2 border-[#5F50D9]'>
            <p className='text-5xl text-center my-[30px] font-semibold text-[#5F50D9]'>REGISTER</p>
            <input onClick={handleNameBlur} className='block w-[99%] input-field h-[50px] mt-[80px] mb-[20px] mx-auto  border-black border-2' type="text" name="" id="name" placeholder=" Your Name" />
            <input onBlur={handleEmailBlur} className='block w-[99%] h-[50px] mb-[20px] mx-auto border-black border-2' type="email" name="email" id="" placeholder='Your Email' />

            <input onBlur={handlePasswordBlur} className='block w-[99%] h-[50px] mb-[20px] mx-auto border-black border-2' placeholder='Your Password' type="password" name="" id="pass" />
            <div className='flex items-center justify-evenly'>
                <button onClick={signUpWithEmail} className='uppercase text-2xl rounded-3xl border-[2px] border-[#422eda] px-10 font-semibold py-5'>
                    Register
                </button>
                <Link onClick={handleLink} className='text-[#422eda]' to='/login'>Already Registered ?</Link>
            </div>

            <br />
            <br />
            <button className='uppercase  w-full text-2xl rounded-3xl border-[2px] border-[#422eda] px-5 font-semibold py-2 flex items-center justify-around'>
                <img className='w-[40px]' src={gglLogo} alt="" />
                <span className='block '>Register With Google</span>
            </button>
            <br />
            <button className='uppercase block w-full text-2xl rounded-3xl border-[2px] flex items-center justify-around border-[#422eda] px-5 font-semibold py-2'>
                <img className='w-[40px]' src={gitLogo} alt="" />
                <span className='block '>Register With Github</span>
            </button>
            <br />
            <button className='uppercase block w-full text-2xl rounded-3xl border-[2px] flex items-center justify-around border-[#422eda] px-5 font-semibold py-2'>
                <img className='w-[40px]' src={fbLogo} alt="" />
                <span className='block '>Register With Facebook</span>
            </button>

        </div>
    );
};

export default Register;