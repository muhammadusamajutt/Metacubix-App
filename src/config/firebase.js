// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCn3ZT39fviH1KQ-AdkSvpw8cvA1hMyheM",
    authDomain: "matacubix.firebaseapp.com",
    projectId: "matacubix",
    storageBucket: "matacubix.appspot.com",
    messagingSenderId: "885490051116",
    appId: "1:885490051116:web:465223e98ce63d508b8989",
    measurementId: "G-06DWBZ4QKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };