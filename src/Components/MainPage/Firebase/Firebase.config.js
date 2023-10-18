// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGfeVsKsnp9xbrjOnGFCNzgK0nhi7z_BI",
    authDomain: "donation-campain-45e8a.firebaseapp.com",
    projectId: "donation-campain-45e8a",
    storageBucket: "donation-campain-45e8a.appspot.com",
    messagingSenderId: "784754279739",
    appId: "1:784754279739:web:7902e2c51c998fb541631e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }