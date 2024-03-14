// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Q5CkzUyTfnFXgftm4Ib6EGncCocoE60",
  authDomain: "chatapp-b4e8c.firebaseapp.com",
  projectId: "chatapp-b4e8c",
  storageBucket: "chatapp-b4e8c.appspot.com",
  messagingSenderId: "435053829571",
  appId: "1:435053829571:web:4043f9718cd5d174d03176"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) ;
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)