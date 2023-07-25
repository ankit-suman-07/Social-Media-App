// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49R7NHchWNZ7NBwGsMFR-DJwaza2MhoA",
  authDomain: "react-social-media-a63ed.firebaseapp.com",
  projectId: "react-social-media-a63ed",
  storageBucket: "react-social-media-a63ed.appspot.com",
  messagingSenderId: "879974814104",
  appId: "1:879974814104:web:8f140c4c3a84545b115bed",
  measurementId: "G-4KNEZLFEKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);