// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM05wukZQjQV-YOZNTXOOhJJXyX_aHRPc",
  authDomain: "redux-social-cc2c2.firebaseapp.com",
  projectId: "redux-social-cc2c2",
  storageBucket: "redux-social-cc2c2.appspot.com",
  messagingSenderId: "861257722645",
  appId: "1:861257722645:web:4e54c28bcc00f424f9d71c",
  measurementId: "G-HC0N5LP75M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
