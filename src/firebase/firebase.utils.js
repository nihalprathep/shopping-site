import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-h5n1xxg4cJjGALJ1DChSglEHaCNWa8s",
  authDomain: "shopping-db-4872f.firebaseapp.com",
  databaseURL: "https://shopping-db-4872f.firebaseio.com",
  projectId: "shopping-db-4872f",
  storageBucket: "shopping-db-4872f.appspot.com",
  messagingSenderId: "624124515709",
  appId: "1:624124515709:web:ef79930a9cfb02e644e814",
  measurementId: "G-HKLG2TBZXG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
