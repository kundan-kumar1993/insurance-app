import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDEXnBs3WoaVFA7dtFiU1xy6FyA5WbH27o",
    authDomain: "insurance-app-dev.firebaseapp.com",
    databaseURL: "https://insurance-app-dev.firebaseio.com",
    projectId: "insurance-app-dev",
    storageBucket: "insurance-app-dev.appspot.com",
    messagingSenderId: "868756558565",
    appId: "1:868756558565:web:503aa5e28577cb5dc3ba0c",
    measurementId: "G-Z6C83W43C4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  export default firebase;