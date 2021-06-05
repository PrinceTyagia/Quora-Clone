import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAA0HM7xMFnNNWEQvvSDcHR8qJUrbbmzfk",
  authDomain: "quora-clone-a98c7.firebaseapp.com",
  projectId: "quora-clone-a98c7",
  storageBucket: "quora-clone-a98c7.appspot.com",
  messagingSenderId: "78071154085",
  appId: "1:78071154085:web:55e1d0a94d8f30be42544c",
  measurementId: "G-5GC8YVK8HF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
