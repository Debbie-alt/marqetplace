import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD0P5ntSjijoCnQDgakU_TM9Vsxc84Upug",
  authDomain: "deplay-fedc8.firebaseapp.com",
  projectId: "deplay-fedc8",
  storageBucket: "deplay-fedc8.firebasestorage.app",
  messagingSenderId: "910685275196",
  appId: "1:910685275196:web:d68f805e9d60ba316a6f39",
  measurementId: "G-9SGZ28D5XS"
};

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const auth  =  getAuth(app)
const provider  =  new GoogleAuthProvider()

export  {app, auth, provider}