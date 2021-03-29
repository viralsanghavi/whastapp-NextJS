import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaTa9ZpJ1Q90zPB30ViHKgxnHFtPjpijk",
  authDomain: "nextjswhatsapp.firebaseapp.com",
  projectId: "nextjswhatsapp",
  storageBucket: "nextjswhatsapp.appspot.com",
  messagingSenderId: "310248322442",
  appId: "1:310248322442:web:98b4754737bac1fb2a8473",
  measurementId: "G-THXLBJJGMM",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
