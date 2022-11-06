// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPYzpEzOmHBECgmcYbtxYWAQ316xIn0o8",
  authDomain: "babble-960e4.firebaseapp.com",
  projectId: "babble-960e4",
  storageBucket: "babble-960e4.appspot.com",
  messagingSenderId: "588675480219",
  appId: "1:588675480219:web:e635c168117dcaf3bae43e",
  measurementId: "G-N5PQ5H2LB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
