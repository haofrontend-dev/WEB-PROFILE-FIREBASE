import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnFVwUQ3EdQeF8ufNxDSnTAP_ZIEiknAY",
  authDomain: "river-runner-379116.firebaseapp.com",
  projectId: "river-runner-379116",
  storageBucket: "river-runner-379116.appspot.com",
  messagingSenderId: "104945032599",
  appId: "1:104945032599:web:a1dff6be01c3e189e9f8d2",
  measurementId: "G-32GTNSQ9PW",
};
const appData = initializeApp(firebaseConfig);
const auth = getAuth(appData);

export { appData, auth };
