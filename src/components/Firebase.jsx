// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHZH2l5vF8HeE40gxE9OnMB-WhP39BJ-0",
  authDomain: "lifeline-devs.firebaseapp.com",
  projectId: "lifeline-devs",
  storageBucket: "lifeline-devs.firebasestorage.app",
  messagingSenderId: "932607509935",
  appId: "1:932607509935:web:aa7af80a46c5b28972db5a",
  measurementId: "G-54RLB6WKTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);