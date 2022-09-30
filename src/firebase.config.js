// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore}  from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1cKdom0gl5ZMjnpdopTvtvRRJPHnz7G0",
  authDomain: "portafolio-sre.firebaseapp.com",
  projectId: "portafolio-sre",
  storageBucket: "portafolio-sre.appspot.com",
  messagingSenderId: "711634676492",
  appId: "1:711634676492:web:0583e34714c9a8210c7729"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
