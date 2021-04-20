import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC37kRDcoVWvILKrd4e0DzTjk4Jpkj6vsM",
    authDomain: "twitter-clone-22d40.firebaseapp.com",
    projectId: "twitter-clone-22d40",
    storageBucket: "twitter-clone-22d40.appspot.com",
    messagingSenderId: "220960122464",
    appId: "1:220960122464:web:281052ce226158ff294505",
    measurementId: "G-RW6TPX25HV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

export default db;