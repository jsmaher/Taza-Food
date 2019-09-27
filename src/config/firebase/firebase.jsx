  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/database'
  import 'firebase/firestore'
  import 'firebase/storage'
  // import 'firebase/firebase-firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyTdlnSOPJEJHjeV1KYOquyDZ1HwFz7Cc",
  authDomain: "tazafood-001.firebaseapp.com",
  databaseURL: "https://tazafood-001.firebaseio.com",
  projectId: "tazafood-001",
  storageBucket: "",
  messagingSenderId: "144124681618",
  appId: "1:144124681618:web:a0d9b58fb4876ef368b54b"
};
// Initialize Firebase

 const firebaseApp= firebase.initializeApp(firebaseConfig);
 export default firebaseApp;