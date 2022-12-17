
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBwtwNQlE1qz0uda91jcNNsrcR8YkpvfhY",
    authDomain: "foododero.firebaseapp.com",
    projectId: "foododero",
    storageBucket: "foododero.appspot.com",
    messagingSenderId: "571049637902",
    appId: "1:571049637902:web:ae62fdedf15382682da45f",
    measurementId: "G-EJVKDFL2L3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);
export {auth}