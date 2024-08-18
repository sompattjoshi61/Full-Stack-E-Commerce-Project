// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnYJsZVAqC3HAAo9oVTkRVvJg1dCXECk",
  authDomain: "next-js-ecommerce-d6fd7.firebaseapp.com",
  projectId: "next-js-ecommerce-d6fd7",
  storageBucket: "next-js-ecommerce-d6fd7.appspot.com",
  messagingSenderId: "345476350500",
  appId: "1:345476350500:web:d650041ff14b264e974eb1",
  measurementId: "G-KQD81WRD6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}