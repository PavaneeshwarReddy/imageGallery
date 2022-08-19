// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBp-vWLEJnu6fAiY3k0hzGV6K5Q_h244oE",
    authDomain: "imagegallery-ba137.firebaseapp.com",
    projectId: "imagegallery-ba137",
    storageBucket: "imagegallery-ba137.appspot.com",
    messagingSenderId: "991003351275",
    appId: "1:991003351275:web:e2c8dfff1d20a4ce3846ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export {projectFirestore,projectStorage};