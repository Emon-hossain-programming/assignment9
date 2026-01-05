// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjgyEapU9jNUZ8_iXju_AieupJeJqooP4",
  authDomain: "assignment9-96a0e.firebaseapp.com",
  projectId: "assignment9-96a0e",
  storageBucket: "assignment9-96a0e.firebasestorage.app",
  messagingSenderId: "1086887773400",
  appId: "1:1086887773400:web:997be2bf62b4d1c7c883ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)