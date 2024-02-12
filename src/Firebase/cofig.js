import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArMtS2ez5CgaoYTAWyIA6sOkmuV5KdCFg",
  authDomain: "codevista-7a95e.firebaseapp.com",
  projectId: "codevista-7a95e",
  storageBucket: "codevista-7a95e.appspot.com",
  messagingSenderId: "911534452415",
  appId: "1:911534452415:web:f8dd7dcb6826defc14200a",
  measurementId: "G-VDF3294RF3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
