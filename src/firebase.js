// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpgVM02W2HPt-4ENoaIigZ31SIFPIGN7o",
  authDomain: "disneyplus-clone-6dd98.firebaseapp.com",
  projectId: "disneyplus-clone-6dd98",
  storageBucket: "disneyplus-clone-6dd98.appspot.com",
  messagingSenderId: "195383850170",
  appId: "1:195383850170:web:79f2d7ea96457f4fd27e83",
  measurementId: "G-38Y5J100PF",
};

// Initialize Firebase
//const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
//const auth = getAuth(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
