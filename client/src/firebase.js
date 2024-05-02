// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-fb2b3.firebaseapp.com",
    projectId: "mern-auth-fb2b3",
    storageBucket: "mern-auth-fb2b3.appspot.com",
    messagingSenderId: "132260313953",
    appId: "1:132260313953:web:cfdfaf1e41b33a4b1de320"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);