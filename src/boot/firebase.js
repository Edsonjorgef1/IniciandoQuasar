// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

// My web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDU0sJAszXivi947dMHmXDP5JTEa2cSYxE",
  authDomain: "smack-chatapp.firebaseapp.com",
  databaseURL: "https://smack-chatapp.firebaseio.com",
  projectId: "smack-chatapp",
  storageBucket: "smack-chatapp.appspot.com",
  messagingSenderId: "747249583043",
  appId: "1:747249583043:web:c67a2dfac971e13ca93376"
};

// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
