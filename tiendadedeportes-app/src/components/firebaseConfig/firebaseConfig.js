// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5GvwbkOeZYG090Pa9u30WFmWFocelFEE",
    authDomain: "tiendadedeportes-31175.firebaseapp.com",
    projectId: "tiendadedeportes-31175",
    storageBucket: "tiendadedeportes-31175.appspot.com",
    messagingSenderId: "773178346267",
    appId: "1:773178346267:web:8dc6e5d26b25d9d7e4e1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)