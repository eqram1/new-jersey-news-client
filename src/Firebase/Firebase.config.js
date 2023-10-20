// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0VE9yCaTdrbsCBAgJHMjMa5HZL8Ys66Y",
    authDomain: "new-jersey-news.firebaseapp.com",
    projectId: "new-jersey-news",
    storageBucket: "new-jersey-news.appspot.com",
    messagingSenderId: "78849940982",
    appId: "1:78849940982:web:cd560664ba8ea946cd7bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;