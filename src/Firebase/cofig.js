import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8GbMEhiHvyesTHquhx-t8cqa38rKdSdM",
  authDomain: "codevista-761a5.firebaseapp.com",
  projectId: "codevista-761a5",
  storageBucket: "codevista-761a5.appspot.com",
  messagingSenderId: "381602333205",
  appId: "1:381602333205:web:9bfe0c3da4b2b0d15fc41c",
  measurementId: "G-VCZ48540JE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
