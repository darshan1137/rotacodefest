import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDZqxJLLuMlf5WjsV5qnq-nT7OjKRJLZXQ",
  authDomain: "codevista-b8ff8.firebaseapp.com",
  projectId: "codevista-b8ff8",
  storageBucket: "codevista-b8ff8.appspot.com",
  messagingSenderId: "453770804559",
  appId: "1:453770804559:web:3b3cef4518a888dca8993a",
  measurementId: "G-6D3CFQE3T4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db };
