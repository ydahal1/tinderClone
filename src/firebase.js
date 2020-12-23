import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHVgAzZ6_dzqksGoacYTZYEayKnO3f08Y",
  authDomain: "social-profile-new.firebaseapp.com",
  projectId: "social-profile-new",
  storageBucket: "social-profile-new.appspot.com",
  messagingSenderId: "508799926683",
  appId: "1:508799926683:web:2091e3df7649708dc9e13e",
  measurementId: "G-9MWKZ3HXJR"
};

//Initilize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
