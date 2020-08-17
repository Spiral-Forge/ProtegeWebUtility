import firebase from 'firebase';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyDHzauz675PoRAnAVQGT7oIcfVGT8gmdT8",
    authDomain: "mentorshipproject-77cef.firebaseapp.com",
    databaseURL: "https://mentorshipproject-77cef.firebaseio.com",
    projectId: "mentorshipproject-77cef",
    storageBucket: "mentorshipproject-77cef.appspot.com",
    messagingSenderId: "890298441261",
    appId: "1:890298441261:web:cd750edfd8a64dc3e5e2a4",
    measurementId: "G-Q8YC96ZJ2E"
  };


  firebase.initializeApp(config);
  export default firebase;