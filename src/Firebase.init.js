// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpzl0S9UMu4f30TqzEzUdSA5enH_KYfp4",
    authDomain: "new-auth-4d53b.firebaseapp.com",
    projectId: "new-auth-4d53b",
    storageBucket: "new-auth-4d53b.appspot.com",
    messagingSenderId: "203827740845",
    appId: "1:203827740845:web:96a86de2cda25184e9c624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;