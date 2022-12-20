
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase, getdatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAhOu0427hzkowMdkRQqlJ6XxHj1Y47cQo",
  authDomain: "foodordero.firebaseapp.com",
  databaseURL: "https://foodordero-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "foodordero",
  storageBucket: "foodordero.appspot.com",
  messagingSenderId: "1009893541350",
  appId: "1:1009893541350:web:f1c0ab4325402a39fa8227",
  measurementId: "G-PVH6PTSFYP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
//const analytics = getAnalytics(app);
export {auth,db}