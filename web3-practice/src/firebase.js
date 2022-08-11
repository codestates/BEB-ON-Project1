// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoUymb7g-IrIO2jI6yIgW_6RkOKapUoCM",
  authDomain: "beb-05-project1.firebaseapp.com",
  databaseURL: "https://beb-05-project1-default-rtdb.firebaseio.com/",
  projectId: "beb-05-project1",
  storageBucket: "beb-05-project1.appspot.com",
  messagingSenderId: "1028956284610",
  appId: "1:1028956284610:web:9ac0f74ed526939ce23d5b",
  measurementId: "G-DV27GH3JYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);