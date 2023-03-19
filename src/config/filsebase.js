import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAPG5KbnxLr5Jh3kEWb5EzIvjJvcjO_IcY",
  authDomain: "test-b99d9.firebaseapp.com",
  databaseURL:
    "https://test-b99d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-b99d9",
  storageBucket: "test-b99d9.appspot.com",
  messagingSenderId: "556640825709",
  appId: "1:556640825709:web:631c7e6421a539a386ea64",
  measurementId: "G-RLC1PXH83C",
};
const appData = initializeApp(firebaseConfig);
const auth = getAuth(appData);

export { appData, auth };
