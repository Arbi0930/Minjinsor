// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web-system-51109.firebaseapp.com",
  projectId: "web-system-51109",
  storageBucket: "web-system-51109.appspot.com",
  messagingSenderId: "518240712808",
  appId: "1:518240712808:web:1a0a1c6409638ff5c1a3dd",
  measurementId: "G-TBPHYF0KE0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
