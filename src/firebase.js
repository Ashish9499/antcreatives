import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBHIi_Xh7wK2CMC2X1ViqJL6-DUTKEKMQM",
    authDomain: "getotp-b95d2.firebaseapp.com",
    projectId: "getotp-b95d2",
    storageBucket: "getotp-b95d2.appspot.com",
    messagingSenderId: "213811057543",
    appId: "1:213811057543:web:7dff36af15f09611b5b922"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase