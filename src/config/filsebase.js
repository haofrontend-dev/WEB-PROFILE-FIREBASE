// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVIYilPqk201SnfC4KdiAbE16mAyzFIQg",
  authDomain: "web-project-a9f68.firebaseapp.com",
  projectId: "web-project-a9f68",
  storageBucket: "web-project-a9f68.appspot.com",
  messagingSenderId: "547131062362",
  appId: "1:547131062362:web:fb0e9675bd6397cae9c063",
  measurementId: "G-BSNDYQ73Q5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { analytics, app, db };
