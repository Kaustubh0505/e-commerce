// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCMU47UyjhVTlbDRu6iATo8Zcd6_xnGH6s",
  authDomain: "e-commerce-bea25.firebaseapp.com",
  projectId: "e-commerce-bea25",
  storageBucket: "e-commerce-bea25.firebasestorage.app",
  messagingSenderId: "292209836323",
  appId: "1:292209836323:web:4d467b3cd755bbab6c0c96",
  measurementId: "G-KQ2JPR9BRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export { app, auth };