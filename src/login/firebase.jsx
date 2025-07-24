// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHzTpw7rC9aiPNYt3TmikBtYTpqATvVmk",
  authDomain: "eventnest-813e0.firebaseapp.com",
  projectId: "eventnest-813e0",
  storageBucket: "eventnest-813e0.firebasestorage.app",
  messagingSenderId: "337190262836",
  appId: "1:337190262836:web:e42ac772acc5dfb7f8d261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;