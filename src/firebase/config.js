
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase, getdatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBwtwNQlE1qz0uda91jcNNsrcR8YkpvfhY",
    authDomain: "foododero.firebaseapp.com",
    databaseURL: "https://foododero-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "foododero",
    storageBucket: "foododero.appspot.com",
    messagingSenderId: "571049637902",
    appId: "1:571049637902:web:ae62fdedf15382682da45f",
    measurementId: "G-EJVKDFL2L3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
//const analytics = getAnalytics(app);
export {auth,db}