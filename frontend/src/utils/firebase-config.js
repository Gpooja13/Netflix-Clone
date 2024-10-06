// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAqCJjANVCj6P06eKiD6bTwddOzLnSu9N8",
  authDomain: "netflix-clone-1ee6c.firebaseapp.com",
  projectId: "netflix-clone-1ee6c",
  storageBucket: "netflix-clone-1ee6c.appspot.com",
  messagingSenderId: "723429623689",
  appId: "1:723429623689:web:1ab1d4a663f4d21df68358",
  measurementId: "G-9T6XFZD6V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);