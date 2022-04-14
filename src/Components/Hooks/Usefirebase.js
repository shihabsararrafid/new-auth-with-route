import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../Firebase.init'
import { Result } from 'postcss';


const Usefirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [useri, setUser] = useState('');

    const signIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                setUser(user);
                console.log(user);


            })
            .catch((err) => {
                console.log(err)
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return {
        useri,
        setUser,
        signIn,
        handleSignOut
    };
};

export default Usefirebase;