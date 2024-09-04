// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG2XcxqqWaRaxXashPLNYmNcW4OxJkYco",
  authDomain: "my-netflix-eed7a.firebaseapp.com",
  projectId: "my-netflix-eed7a",
  storageBucket: "my-netflix-eed7a.appspot.com",
  messagingSenderId: "36846838438",
  appId: "1:36846838438:web:f55f820889fc89a1734a67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
