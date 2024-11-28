// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ6IX2c-pg21FhmN5nlk4ajfKnGY6JfOg",
  authDomain: "heroes-crud-7ea55.firebaseapp.com",
  projectId: "heroes-crud-7ea55",
  storageBucket: "heroes-crud-7ea55.appspot.com",
  messagingSenderId: "759697352389",
  appId: "1:759697352389:web:7d2377ddef0629107a72ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)