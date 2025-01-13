// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCf5e1ebqLM4uQu62BUpn181b2_cZP0d5A",
    authDomain: "todo-46cba.firebaseapp.com",
    projectId: "todo-46cba",
    storageBucket: "todo-46cba.firebasestorage.app",
    messagingSenderId: "983520547442",
    appId: "1:983520547442:web:4500331a48a9e16bbf28eb"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
