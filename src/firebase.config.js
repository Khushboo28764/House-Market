// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe9rJhbitlgXsek8_2EDYCfHqac-Oppkw",
  authDomain: "house-market-245f5.firebaseapp.com",
  projectId: "house-market-245f5",
  storageBucket: "house-market-245f5.appspot.com",
  messagingSenderId: "9677217932",
  appId: "1:9677217932:web:13aec81858e78646f99ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();