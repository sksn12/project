import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIRE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIRE_AUTH}`,
  projectId: `${process.env.REACT_APP_FIRE_PROJECTID}`,
  databaseURL: `${process.env.REACT_APP_FIRE_DB_URL}`,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDatabase = firebaseApp.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
