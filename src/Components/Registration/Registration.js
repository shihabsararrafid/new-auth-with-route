import React, { useState } from 'react';
import Register from '../Register/Register';
import Succesful from '../Succesful/Succesful';
import Unsuccessgul from '../Succesful/Unsuccessgul';

const Registration = () => {
    const [visibilty, setVisibilty] = useState(0);
    console.log(visibilty);
    return (
        <div>
            {
                visibilty === 1 ? <Succesful></Succesful> : ''
            }
            {
                visibilty === 2 ? <Unsuccessgul></Unsuccessgul> : ''
            }
            {
                visibilty === 0 ? '' : ''
            }


            <Register setVisibilty={setVisibilty}></Register>
        </div>
    );
};

export default Registration;