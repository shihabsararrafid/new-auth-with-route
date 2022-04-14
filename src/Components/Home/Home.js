import React from 'react';
import Toggle from '../Hooks/toggleRegiLog';
import Usefirebase from '../Hooks/Usefirebase';
import Register from '../Register/Register';
import Succesful from '../Succesful/Succesful';
import Unsuccessgul from '../Succesful/Unsuccessgul';

const Home = () => {
    const { useri } = Usefirebase();

    const [visibilty, setVisibilty] = Toggle();
    console.log(visibilty);


    return (
        <div className='bg-blue-600 h-[1000px]'>

            <h1 className='text-7xl'>Welcome to Tech Geeks</h1>
            {/* {
                useri ? '' : <Register></Register>
            } */}

        </div>
    );
};

export default Home;