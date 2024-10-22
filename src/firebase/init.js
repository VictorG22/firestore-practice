// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmRNVQSNTLMSfUVthw9bHJxJeZSL8Qfxs",
  authDomain: "firestore-9ffd7.firebaseapp.com",
  projectId: "firestore-9ffd7",
  storageBucket: "firestore-9ffd7.appspot.com",
  messagingSenderId: "142583966106",
  appId: "1:142583966106:web:f82409bc9ae206921eb223",
  measurementId: "G-XV5C7YLVQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();