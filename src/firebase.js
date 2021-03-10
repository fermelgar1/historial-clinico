import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCSXkOVduMbKL5JB9mzRbbBIGoG_QnJn1c",
  authDomain: "historial-clinico-d0f59.firebaseapp.com",
  projectId: "historial-clinico-d0f59",
  storageBucket: "historial-clinico-d0f59.appspot.com",
  messagingSenderId: "706516638253",
  appId: "1:706516638253:web:1260a6cd0a8c62b75036a4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }