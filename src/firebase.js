// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiAKLGgo0oMHbEEQLDU5Cf3jHTZC4Q3qI",
  authDomain: "portfolio-8ce81.firebaseapp.com",
  projectId: "portfolio-8ce81",
  storageBucket: "portfolio-8ce81.appspot.com",
  messagingSenderId: "237684583949",
  appId: "1:237684583949:web:4a2d99fd4466b11670ef44",
  measurementId: "G-Z5BW8KKGW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);