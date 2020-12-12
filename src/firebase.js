import firebase from 'firebase/app'

import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDGW268EuOS04a8g5yH6hDo7fk7gpA_KHI",
  authDomain: "blog-4ec6e.firebaseapp.com",
  projectId: "blog-4ec6e",
  storageBucket: "blog-4ec6e.appspot.com",
  messagingSenderId: "647006230125",
  appId: "1:647006230125:web:684167edb7546d0b015164"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export {db}