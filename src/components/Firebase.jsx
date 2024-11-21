import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHZH2l5vF8HeE40gxE9OnMB-WhP39BJ-0",
  authDomain: "lifeline-devs.firebaseapp.com",
  projectId: "lifeline-devs",
  storageBucket: "lifeline-devs.firebasestorage.app",
  messagingSenderId: "932607509935",
  appId: "1:932607509935:web:aa7af80a46c5b28972db5a",
  measurementId: "G-54RLB6WKTG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();