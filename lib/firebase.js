import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCy37NhG9E8C_IRGvxiWVrO9YgrrrYgoMU",
    authDomain: "tacet-89195.firebaseapp.com",
    projectId: "tacet-89195",
    storageBucket: "tacet-89195.firebasestorage.app",
    messagingSenderId: "437336752343",
    appId: "1:437336752343:web:294097880e7ef12f597092",
    measurementId: "G-9YTL2D4YK1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
