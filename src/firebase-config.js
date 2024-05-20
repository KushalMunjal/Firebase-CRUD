// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQXcxSptIIHqYrlLZ8PnK7mGMd4bUQc1s",
  authDomain: "practical14awt.firebaseapp.com",
  projectId: "practical14awt",
  storageBucket: "practical14awt.appspot.com",
  messagingSenderId: "280139442043",
  appId: "1:280139442043:web:9c0b3e609bcbbeae1e3fde",
  measurementId: "G-4D0BR4D2BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);