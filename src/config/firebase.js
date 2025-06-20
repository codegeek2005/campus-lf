import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUxDP-CTK60hRpkpJNgKJOhaFcmdVscfc",
  authDomain: "campus-lf.firebaseapp.com",
  projectId: "campus-lf",
  storageBucket: "campus-lf.firebasestorage.app",
  messagingSenderId: "576697641184",
  appId: "1:576697641184:web:2de089b4a6cd3809f84885",
  measurementId: "G-24QJXQK2RS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider();


export {auth, db, googleProvider}