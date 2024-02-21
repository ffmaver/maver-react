// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATNdlaNpY5T8BRZMiCPva2TRk7pjmjvPs",
    authDomain: "arcssen.firebaseapp.com",
    projectId: "arcssen",
    storageBucket: "arcssen.appspot.com",
    messagingSenderId: "68330908826",
    appId: "1:68330908826:web:87d00884053f35b67ec323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);