// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjFWDl7nhf8Ghdcxk-2aUYlBQEH5Wq4hs",
  authDomain: "doctorportal-287cd.firebaseapp.com",
  projectId: "doctorportal-287cd",
  storageBucket: "doctorportal-287cd.firebasestorage.app",
  messagingSenderId: "156617712424",
  appId: "1:156617712424:web:214e6d19263e51c94fa61d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);