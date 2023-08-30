// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7yivqzHnRiL8OX4rblXTl0PJ-f8BIT4s",
  authDomain: "todo-app-816f0.firebaseapp.com",
  projectId: "todo-app-816f0",
  storageBucket: "todo-app-816f0.appspot.com",
  messagingSenderId: "749287000250",
  appId: "1:749287000250:web:1beefd6817029212085a83",
  measurementId: "G-1Z2M55F6XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);