
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiIb2vBSFoUdGL7qH7qMsJpdRBdCj_XM4",
  authDomain: "sign-project-74622.firebaseapp.com",
  projectId: "sign-project-74622",
  storageBucket: "sign-project-74622.appspot.com",
  messagingSenderId: "149446996374",
  appId: "1:149446996374:web:2d74cf402aaade883d6db7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };