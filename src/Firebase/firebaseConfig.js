// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1dRYtkpibtE3ZVJDdga-IXtzwgJ6E2Gw",
    authDomain: "razoreditor-alpha.firebaseapp.com",
    projectId: "razoreditor-alpha",
    storageBucket: "razoreditor-alpha.appspot.com",
    messagingSenderId: "137161786804",
    appId: "1:137161786804:web:86800ccfd76ef46d3e9ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const RazorAuth = getAuth(app);

export { RazorAuth }