// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD26umnYBN3zORNO1NI-M6iBGOYX3PLGmM",
    authDomain: "dreams-photography-786.firebaseapp.com",
    projectId: "dreams-photography-786",
    storageBucket: "dreams-photography-786.appspot.com",
    messagingSenderId: "929760391350",
    appId: "1:929760391350:web:42c3c9cbdd473cc657b617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;