// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz1HRCClbv6wSxGcQoxC5_ZJ8QNefXf-M",
  authDomain: "courfedra-76b13.firebaseapp.com",
  projectId: "courfedra-76b13",
  storageBucket: "courfedra-76b13.appspot.com",
  messagingSenderId: "38244717946",
  appId: "1:38244717946:web:f210cedd7186968f3032c3",
  measurementId: "G-5FK4CHJZQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);